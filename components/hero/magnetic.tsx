"use client";

import { LazyMotion, m, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";

import { cn } from "@/lib/utils";

const loadFeatures = () => import("./motion-features").then((mod) => mod.default);
const SPRING = { stiffness: 220, damping: 18, mass: 0.4 };
const PULL = 0.18;

export function Magnetic({ children, className }: { children: ReactNode; className?: string }) {
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING);
  const springY = useSpring(y, SPRING);

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || event.pointerType !== "mouse") return;
    const box = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - box.left - box.width / 2) * PULL);
    y.set((event.clientY - box.top - box.height / 2) * PULL);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <LazyMotion features={loadFeatures} strict>
      {/* Area deteksi diam; hanya lapisan dalam yang bergerak agar kursor tidak "lepas". */}
      <div className={cn(className)} onPointerMove={handleMove} onPointerLeave={reset}>
        <m.div style={{ x: springX, y: springY }}>{children}</m.div>
      </div>
    </LazyMotion>
  );
}
