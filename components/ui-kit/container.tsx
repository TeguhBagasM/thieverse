import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  width?: "default" | "reading";
};

export function Container({ children, className, width = "default" }: ContainerProps) {
  return (
    <div
      className={cn("container", width === "reading" && "max-w-[68ch]", className)}
    >
      {children}
    </div>
  );
}
