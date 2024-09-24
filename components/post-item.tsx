import { Calendar } from "lucide-react";
import Link from "next/link";
import { cn, formatDate } from "@/lib/utils";
import { Tag } from "./tag";
import { buttonVariants } from "./ui/button";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
}

export function PostItem({ slug, title, description, date, tags }: PostItemProps) {
  return (
    <article className="flex flex-col gap-4 p-6 bg-white dark:bg-slate-950 rounded-lg shadow-lg transition-shadow hover:shadow-xl border border-gray-300 dark:border-slate-700 mb-4">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 relative group inline-block">
          <Link href={"/" + slug}>
            {title}
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      <div className="max-w-none text-muted-foreground">{description}</div>
      <div className="flex justify-between items-center mt-4">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="text-sm font-medium flex items-center text-gray-500 dark:text-gray-200">
            <Calendar className="h-5 w-5 text-blue-500" />
            <time dateTime={date} className="ml-1">
              {formatDate(date)}
            </time>
          </dd>
        </dl>
        <Link
          href={"/" + slug}
          className={cn(
            buttonVariants({ variant: "link" }),
            "py-0 text-blue-600 dark:text-blue-500 text-md relative",
            "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-current",
            "after:transition-all after:duration-300 after:ease-in-out",
            "hover:after:w-full"
          )}
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}
