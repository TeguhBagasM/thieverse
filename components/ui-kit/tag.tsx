import Link from "next/link";
import { slug } from "github-slugger";

import { cn } from "@/lib/utils";

type TagProps = {
  tag: string;
  count?: number;
  current?: boolean;
  className?: string;
};

export function Tag({ tag, count, current, className }: TagProps) {
  const displayTag = tag.startsWith("#") ? tag : `#${tag}`;

  return (
    <Link
      href={`/tags/${slug(tag)}`}
      aria-current={current ? "page" : undefined}
      className={cn(
        "inline-flex items-center gap-1 rounded border px-2.5 py-1 text-xs font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        current
          ? "border-foreground bg-foreground text-background"
          : "border-line bg-surface text-foreground hover:bg-accent-soft",
        className
      )}
    >
      <span>{displayTag}</span>
      {count !== undefined ? <span className="opacity-70">({count})</span> : null}
    </Link>
  );
}
