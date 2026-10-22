import Link from "next/link";
import { Tag } from "./tag";
import { CoverImage } from "./ui-kit/cover-image";
import { Meta } from "./ui-kit/meta";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
  img?: string;
}

export function PostItem({ slug, title, date, tags, img }: PostItemProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-line bg-surface">
      <Link href={"/" + slug}>
        <CoverImage
          src={img}
          alt={title}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="rounded-none border-0"
        />
      </Link>
      <div className="p-4">
        <div className="mb-2 flex flex-wrap gap-2">
          {tags?.map((tag) => <Tag tag={tag} key={tag} />)}
        </div>
        <Link href={"/" + slug}>
          <h3 className="mt-2 text-base font-bold capitalize text-foreground sm:mt-4 sm:text-lg md:text-2xl">
            <span className="transition-colors duration-150 group-hover:text-primary">{title}</span>
          </h3>
        </Link>
        <Meta date={date} className="mt-2" />
      </div>
    </article>
  );
}
