import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  label?: string;
  id?: string;
};

export function Section({ children, className, label, id }: SectionProps) {
  return (
    <section id={id} className={cn("space-y-6", className)}>
      {label ? (
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </p>
      ) : null}
      {children}
    </section>
  );
}
