"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { HeroPoster } from "./hero-poster";

const HeroCanvas = dynamic(() => import("./hero-canvas"), { ssr: false });

type NavigatorHints = Navigator & {
  deviceMemory?: number;
  connection?: { saveData?: boolean };
};

function canRender3d() {
  const nav = navigator as NavigatorHints;
  if (nav.connection?.saveData) return false;
  if ((nav.deviceMemory ?? 8) <= 2 || (nav.hardwareConcurrency ?? 8) <= 2) return false;

  const gl = document.createElement("canvas").getContext("webgl2");
  gl?.getExtension("WEBGL_lose_context")?.loseContext();
  return Boolean(gl);
}

export function HeroScene() {
  const { resolvedTheme } = useTheme();
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);
  const handleReady = useCallback(() => setReady(true), []);
  const handleFail = useCallback(() => {
    setEnabled(false);
    setReady(false);
  }, []);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let cancel = () => {};

    const update = () => {
      cancel();
      // Reduced motion: tetap poster statis, three.js tidak diunduh.
      if (motionQuery.matches) {
        handleFail();
        return;
      }

      const start = () => setEnabled(canRender3d());
      // Muat 3D setelah halaman selesai dan browser senggang, agar teks tidak berebut sumber daya.
      const schedule = () => {
        if ("requestIdleCallback" in window) {
          const id = window.requestIdleCallback(start, { timeout: 2000 });
          cancel = () => window.cancelIdleCallback(id);
        } else {
          const id = setTimeout(start, 600);
          cancel = () => clearTimeout(id);
        }
      };

      if (document.readyState === "complete") {
        schedule();
      } else {
        window.addEventListener("load", schedule, { once: true });
        cancel = () => window.removeEventListener("load", schedule);
      }
    };

    update();
    motionQuery.addEventListener("change", update);
    return () => {
      cancel();
      motionQuery.removeEventListener("change", update);
    };
  }, [handleFail]);

  return (
    // Rasio kotak ditetapkan sejak SSR, sehingga pergantian poster ke canvas tidak menggeser layout.
    <div
      aria-hidden="true"
      data-hero-scene={ready ? "3d" : "static"}
      className="relative mx-auto aspect-[56/45] w-full max-w-[min(100%,30svh)] sm:max-w-md lg:max-w-none"
    >
      <HeroPoster
        className={cn("absolute inset-0 transition-opacity duration-500", ready && "opacity-0")}
      />
      {enabled && (
        <div
          className={cn(
            "absolute inset-0 opacity-0 transition-opacity duration-500",
            ready && "opacity-100"
          )}
        >
          <HeroCanvas dark={resolvedTheme === "dark"} onReady={handleReady} onFail={handleFail} />
        </div>
      )}
    </div>
  );
}
