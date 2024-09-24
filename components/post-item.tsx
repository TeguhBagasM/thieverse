import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Tag } from "./tag";
import Image from "next/image";
import { Calendar } from "lucide-react";

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
    <article className="flex flex-col bg-white dark:bg-slate-950 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-200 dark:border-slate-700">
      <Link href={"/" + slug}>
        {img ? (
          <Image
            src={img}
            alt={title}
            className="aspect-video w-full object-cover cursor-pointer"
            width={400}
            height={200}
          />
        ) : (
          <div className="aspect-video w-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No image available</span>
          </div>
        )}
      </Link>
      <div className="p-4">
        <div className="flex gap-2 mb-2">{tags?.map((tag) => <Tag tag={tag} key={tag} />)}</div>
        <Link href={"/" + slug}>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white line-clamp-2 hover:text-indigo-600 transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-sm sm:text-base font-sm mt-2 flex items-center gap-1">
          <Calendar className="h-4 w-4 text-blue-500" />
          <time dateTime={date}>{formatDate(date)}</time>
        </p>
      </div>
    </article>
  );
}
