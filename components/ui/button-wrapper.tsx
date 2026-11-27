"use client"; // Ini harus diletakkan di bagian atas file

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const ButtonWrapper = () => {
  return (
    <div className="flex min-h-[200px] items-center justify-center bg-surface px-4">
      <SpotlightButton />
    </div>
  );
};

const SpotlightButton = () => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { width, height } = (e.target as HTMLElement)?.getBoundingClientRect();
      const offsetX = e.offsetX;
      const offsetY = e.offsetY;

      const left = `${(offsetX / width) * 100}%`;
      const top = `${(offsetY / height) * 100}%`;

      spanRef.current!.animate({ left, top }, { duration: 150, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanRef.current!.animate({ left: "50%", top: "50%" }, { duration: 100, fill: "forwards" });
    };

    btnRef?.current?.addEventListener("mousemove", handleMouseMove);
    btnRef?.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btnRef?.current?.removeEventListener("mousemove", handleMouseMove);
      btnRef?.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.button
      ref={btnRef}
      className="relative w-full max-w-xs overflow-hidden rounded-lg border border-line bg-foreground px-4 py-3 text-lg font-medium text-background"
    >
      <span className="pointer-events-none relative z-10">Hover me</span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-full w-full rounded-lg border-2 border-primary"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </motion.button>
  );
};

export default ButtonWrapper;
