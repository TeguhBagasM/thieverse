"use client";

import { AnimatePresence, LazyMotion, m, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const loadFeatures = () => import("./motion-features").then((mod) => mod.default);
const STEP_MS = 2200;

type RotatingTextProps = { prefix: string; items: readonly string[] };

export function RotatingText({ prefix, items }: RotatingTextProps) {
  const reducedMotion = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Satu putaran saja, supaya teks tidak terus bergerak selama pengunjung membaca.
    if (reducedMotion || step >= items.length) return;
    const timer = setTimeout(() => setStep((value) => value + 1), STEP_MS);
    return () => clearTimeout(timer);
  }, [reducedMotion, step, items.length]);

  const current = items[step % items.length];

  return (
    <>
      <span className="sr-only">
        {prefix} {items.join(", ")}.
      </span>
      <span aria-hidden="true" className="flex flex-wrap gap-x-1.5">
        <span>{prefix}</span>
        <LazyMotion features={loadFeatures} strict>
          <span className="inline-grid overflow-hidden">
            <AnimatePresence initial={false} mode="popLayout">
              <m.span
                key={current}
                className="whitespace-nowrap font-semibold text-primary [grid-area:1/1]"
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: "0%" }}
                exit={{ opacity: 0, y: "-100%" }}
                transition={{ duration: 0.32, ease: "easeOut" }}
              >
                {current}
              </m.span>
            </AnimatePresence>
          </span>
        </LazyMotion>
      </span>
    </>
  );
}
