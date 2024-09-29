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
    <article className="flex flex-col bg-white dark:bg-slate-950 rounded-xl shadow-lg overflow-hidden group">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <Link href={"/" + slug}>
          {img ? (
            <Image
              src={img}
              alt={title}
              className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              width={400}
              height={300}
            />
          ) : (
            <div className="aspect-video w-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">No image available</span>
            </div>
          )}
        </Link>
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {tags?.map((tag) => <Tag tag={tag} key={tag} />)}
        </div>
        <Link href={"/" + slug}>
          <h3 className="font-bold capitalize text-base xs:text-lg sm:text-xl md:text-2xl text-light mt-2 sm:mt-4">
            <span
              className="bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0px_4px]
          group-hover:bg-[length:100%_4px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 pb-1"
            >
              {title}
            </span>
          </h3>
        </Link>
        <p className="text-xs sm:text-sm md:text-base font-sm mt-2 flex items-center gap-1">
          <Calendar className="h-4 w-4 text-blue-500" />
          <time dateTime={date}>{formatDate(date)}</time>
        </p>
      </div>
    </article>
  );
}
