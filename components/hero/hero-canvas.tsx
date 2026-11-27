"use client";

import { useEffect, useRef } from "react";
import {
  DirectionalLight,
  HemisphereLight,
  Material,
  Mesh,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

import { heroConfig } from "@/config/hero";
import { createMonitorModel } from "./monitor-model";
import { createTerminalScreen } from "./terminal-screen";

type HeroCanvasProps = {
  dark: boolean;
  onReady: () => void;
  onFail: () => void;
};

// Ruang yang harus selalu terlihat (satuan scene), termasuk cincin dan keyboard.
const FRAME_WIDTH = 6.6;
const FRAME_HEIGHT = 6.8;
// Cincin menjulang lebih tinggi daripada turunnya keyboard, jadi kamera dinaikkan sedikit.
const FRAME_CENTER_Y = 0.35;

export default function HeroCanvas({ dark, onReady, onFail }: HeroCanvasProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef(dark);
  const applyThemeRef = useRef<(dark: boolean) => void>();

  useEffect(() => {
    themeRef.current = dark;
    applyThemeRef.current?.(dark);
  }, [dark]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const lite =
      window.matchMedia("(max-width: 767px), (pointer: coarse)").matches ||
      (navigator.hardwareConcurrency ?? 8) <= 4;

    let renderer: WebGLRenderer;
    try {
      renderer = new WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
    } catch {
      onFail();
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, lite ? 1.25 : 1.5));
    renderer.domElement.style.cssText = "display:block;width:100%;height:100%";
    host.appendChild(renderer.domElement);

    const scene = new Scene();
    const camera = new PerspectiveCamera(28, 1, 0.1, 100);
    const keyLight = new DirectionalLight(0xffffff, 1.8);
    keyLight.position.set(3, 4, 6);
    scene.add(new HemisphereLight(0xffffff, 0x1f3a2e, 1.6), keyLight);

    const monoFont =
      getComputedStyle(document.body).getPropertyValue("--font-mono").trim() || "monospace";
    const terminal = createTerminalScreen(heroConfig.terminal, monoFont);
    const model = createMonitorModel(terminal.texture, lite);
    model.setTheme(themeRef.current);
    scene.add(model.group);

    const pointer = { x: 0, y: 0 };
    const eased = { x: 0, y: 0, scroll: 0 };
    let elapsed = 0;
    let lastTime = 0;
    let frameId = 0;
    let onScreen = true;
    let ready = false;

    const render = () => {
      const sway = Math.sin(elapsed * 0.55);
      model.group.rotation.y = -0.32 + eased.x * 0.28 + sway * 0.045;
      model.group.rotation.x = 0.07 + eased.y * 0.14 + eased.scroll * 0.28;
      model.group.position.y = 0.2 + sway * 0.05 - eased.scroll * 0.25;
      // Cincin bergerak berlawanan sedikit untuk memberi kedalaman.
      model.ring.position.x = -eased.x * 0.3;
      model.ring.position.y = 0.2 + eased.y * 0.2;
      terminal.draw(elapsed);
      renderer.render(scene, camera);

      if (!ready) {
        ready = true;
        onReady();
      }
    };

    const tick = (time: number) => {
      const delta = lastTime ? Math.min((time - lastTime) / 1000, 0.05) : 0;
      lastTime = time;
      elapsed += delta;

      const ease = 1 - Math.exp(-delta * 6);
      const scroll = Math.min(Math.max(window.scrollY / window.innerHeight, 0), 1);
      eased.x += (pointer.x - eased.x) * ease;
      eased.y += (pointer.y - eased.y) * ease;
      eased.scroll += (scroll - eased.scroll) * ease;

      render();
      frameId = requestAnimationFrame(tick);
    };

    // Loop hanya berjalan saat canvas terlihat dan tab aktif.
    const syncLoop = () => {
      const shouldRun = onScreen && !document.hidden;
      if (shouldRun && !frameId) {
        lastTime = 0;
        frameId = requestAnimationFrame(tick);
      } else if (!shouldRun && frameId) {
        cancelAnimationFrame(frameId);
        frameId = 0;
      }
    };

    const resize = () => {
      const { clientWidth: width, clientHeight: height } = host;
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      const halfFov = Math.tan((camera.fov * Math.PI) / 360);
      camera.position.z = Math.max(FRAME_HEIGHT, FRAME_WIDTH / camera.aspect) / (2 * halfFov);
      camera.position.y = FRAME_CENTER_Y;
      camera.updateProjectionMatrix();
      render();
    };

    const handlePointer = (event: globalThis.PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
    };

    const handleContextLost = (event: Event) => {
      event.preventDefault();
      onFail();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      syncLoop();
    });
    visibilityObserver.observe(host);
    document.addEventListener("visibilitychange", syncLoop);
    window.addEventListener("pointermove", handlePointer, { passive: true });
    renderer.domElement.addEventListener("webglcontextlost", handleContextLost);

    applyThemeRef.current = (nextDark) => {
      model.setTheme(nextDark);
      render();
    };

    let disposed = false;
    document.fonts.load(`500 46px ${monoFont}`).finally(() => {
      if (disposed) return;
      terminal.invalidate();
      resize();
      syncLoop();
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", syncLoop);
      window.removeEventListener("pointermove", handlePointer);
      renderer.domElement.removeEventListener("webglcontextlost", handleContextLost);
      applyThemeRef.current = undefined;

      scene.traverse((object) => {
        if (!(object instanceof Mesh)) return;
        object.geometry.dispose();
        (object.material as Material).dispose();
        if ("isInstancedMesh" in object) (object as unknown as { dispose(): void }).dispose();
      });
      terminal.texture.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
    };
  }, [onReady, onFail]);

  return <div ref={hostRef} className="h-full w-full" />;
}
