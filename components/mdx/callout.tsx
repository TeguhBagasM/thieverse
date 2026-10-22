import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import {
  CircleAlert,
  TriangleAlert,
  Flame,
  Lightbulb,
  Info,
} from "lucide-react";

interface CalloutProps {
  children?: ReactNode;
  type?: "info" | "danger" | "caution" | "tip" | "note";
  title?: string;
}

const calloutIcon = {
  info: <CircleAlert className="mr-2 size-6" />,
  danger: <Flame className="mr-2 size-6" />,
  caution: <TriangleAlert className="mr-2 size-6" />,
  tip: <Lightbulb className="mr-2 h-6 w-6" />,
  note: <Info className="mr-2 size-6" />,
};

export function Callout({
  children,
  type = "note",
  title,
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn(
        "not-prose mb-6 rounded-md border border-l-4 border-l-current p-4 text-sm dark:border-b-transparent dark:border-r-transparent dark:border-t-transparent",
        {
          "border-l-focus bg-focus/10 text-foreground":
            type === "danger" || type === "caution",
          "border-l-primary bg-accent-soft text-foreground":
            type === "info" || type === "tip",
          "border-l-line bg-surface text-foreground":
            type === "note",
        },
      )}
      {...props}
    >
      <div className="flex flex-col">
        <div className="flex items-center font-bold uppercase">
          {calloutIcon[type]}
          {title ? title : type}
        </div>
      </div>
      {children}
    </div>
  );
}
