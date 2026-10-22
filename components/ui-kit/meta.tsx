import { cn, formatDate } from "@/lib/utils";

type MetaProps = {
  date?: string;
  readingTime?: number;
  className?: string;
};

export function Meta({ date, readingTime, className }: MetaProps) {
  if (!date && !readingTime) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground",
        className
      )}
    >
      {date ? <time dateTime={date}>{formatDate(date)}</time> : null}
      {date && readingTime ? <span aria-hidden="true">·</span> : null}
      {readingTime ? <span>{readingTime} menit baca</span> : null}
    </div>
  );
}
