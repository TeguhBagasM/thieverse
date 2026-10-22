import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ProseProps = {
  children: ReactNode;
  className?: string;
};

export function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={cn(
        "prose max-w-[68ch] font-body prose-a:underline prose-a:underline-offset-4",
        className
      )}
    >
      {children}
    </div>
  );
}
