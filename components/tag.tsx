import Link from "next/link";
import { slug } from "github-slugger";
import { badgeVariants } from "./ui/badge";

interface TagProps {
  tag: string;
  current?: boolean;
  count?: number;
  className?: string;
}
export function Tag({ tag, current, count, className }: TagProps) {
  const displayTag = tag.startsWith("#") ? tag : `#${tag}`;

  return (
    <Link
      className={badgeVariants({
        variant: current ? "default" : "secondary",
        className: `no-underline rounded-full px-4 py-2 text-base transition-all duration-200 ease-in-out transform hover:scale-105 shadow-md ${className || ""}`,
      })}
      href={`/tags/${slug(tag)}`}
    >
      <span className="font-semibold">{displayTag}</span>
      {count !== undefined && <span className="ml-2 opacity-75">({count})</span>}
    </Link>
  );
}
