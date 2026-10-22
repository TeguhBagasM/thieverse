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
        "prose max-w-[68ch] font-body prose-a:underline prose-a:underline-offset-4 prose-img:rounded-lg prose-img:border prose-img:border-line prose-pre:rounded-lg prose-pre:border prose-pre:border-line",
        className
      )}
    >
      {children}
    </div>
  );
}
