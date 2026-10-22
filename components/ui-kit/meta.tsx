import { cn } from "@/lib/utils";

type MetaProps = {
  date?: string;
  readingTime?: number;
  className?: string;
};

function formatDate(date: string) {
  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsed);
}

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
