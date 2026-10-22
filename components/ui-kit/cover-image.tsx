import Image from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const FALLBACK_SRC = "/images/not-found.png";

type CoverImageProps = {
  src?: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  children?: ReactNode;
};

export function CoverImage({
  src,
  alt,
  className,
  sizes = "100vw",
  priority,
  children,
}: CoverImageProps) {
  return (
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-lg border border-line bg-surface",
        className
      )}
    >
      <Image
        src={src || FALLBACK_SRC}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
      {children}
    </div>
  );
}
