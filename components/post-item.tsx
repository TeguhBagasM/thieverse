import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Tag } from "./tag";
import Image from "next/image";

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
    <article className="flex flex-col gap-4 p-6 bg-white dark:bg-slate-950 rounded-lg shadow-lg transition-shadow hover:shadow-xl border border-gray-300 dark:border-slate-700 mb-4">
      <div className="items-start">
        <div className="m-auto flex flex-col">
          <Link href={"/" + slug}>
            {img ? (
              <Image
                src={img}
                alt={title}
                className="aspect-video cursor-pointer rounded-xl border object-cover"
                width={400}
                height={200}
              />
            ) : (
              <div className="aspect-video cursor-pointer rounded-xl border object-cover bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">No image available</span>
              </div>
            )}
          </Link>
          <div className="px-4">
            <Link href={"/" + slug}>
              <p className="cursor-pointer text-2xl font-bold">{title}</p>
            </Link>
            <div className="my-1 flex h-[22px] flex-wrap gap-2">
              {tags?.map((tag) => <Tag tag={tag} key={tag} />)}
            </div>
            <p className="mt-1 text-sm">
              <time dateTime={date}>{formatDate(date)}</time>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
