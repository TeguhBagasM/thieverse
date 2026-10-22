import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "link";
  size?: "default" | "sm" | "lg";
};

const variants = {
  primary:
    "border-foreground bg-foreground text-background hover:bg-foreground/90",
  secondary:
    "border-line bg-transparent text-foreground hover:bg-accent-soft",
  link: "h-auto border-transparent px-0 py-0 text-foreground underline underline-offset-4 hover:text-primary",
};

const sizes = {
  default: "h-10 px-4",
  sm: "h-9 px-3 text-sm",
  lg: "h-11 px-6",
};

export function ButtonLink({
  className,
  variant = "primary",
  size = "default",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded border text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
