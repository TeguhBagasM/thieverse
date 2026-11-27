import { CanvasTexture, SRGBColorSpace } from "three";

import type { TerminalStep } from "@/config/hero";

const WIDTH = 1024;
const HEIGHT = 624;
const TYPE_SECONDS = 0.07;
const PAUSE_SECONDS = 0.7;

/** Terminal yang digambar ke canvas 2D lalu dipakai sebagai tekstur layar monitor. */
export function createTerminalScreen(steps: readonly TerminalStep[], fontFamily: string) {
  const canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const context = canvas.getContext("2d")!;
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  let lastFrame = "";

  const draw = (elapsed: number) => {
    const lines: { text: string; prompt: boolean }[] = [];
    let remaining = elapsed;
    let typing = false;

    for (const step of steps) {
      const typeTime = step.command.length * TYPE_SECONDS;
      if (remaining < typeTime) {
        const length = Math.floor(remaining / TYPE_SECONDS);
        lines.push({ text: step.command.slice(0, length), prompt: true });
        typing = true;
        break;
      }
      lines.push({ text: step.command, prompt: true });
      step.output.forEach((text) => lines.push({ text, prompt: false }));
      remaining -= typeTime + PAUSE_SECONDS;
      if (remaining < 0) break;
    }

    const finished = !typing && remaining >= 0;
    if (finished) lines.push({ text: "", prompt: true });
    const cursorOn = Math.floor(elapsed * 2) % 2 === 0;

    // Unggah ulang tekstur hanya saat isi layar benar-benar berubah.
    const frame = JSON.stringify([lines, cursorOn]);
    if (frame === lastFrame) return;
    lastFrame = frame;

    context.fillStyle = "#0E1A14";
    context.fillRect(0, 0, WIDTH, HEIGHT);
    context.font = `500 46px ${fontFamily}`;
    context.textBaseline = "top";

    lines.forEach((line, index) => {
      const y = 48 + index * 68;
      let x = 56;
      if (line.prompt) {
        context.fillStyle = "#8FA8FF";
        context.fillText(">", x, y);
        x += 56;
      }
      context.fillStyle = line.prompt ? "#E8EEE8" : "#A4B2A8";
      context.fillText(line.text, x, y);

      if (cursorOn && index === lines.length - 1) {
        context.fillStyle = "#8FA8FF";
        context.fillRect(x + context.measureText(line.text).width + 6, y + 42, 28, 7);
      }
    });

    texture.needsUpdate = true;
  };

  return { texture, draw, invalidate: () => (lastFrame = "") };
}
