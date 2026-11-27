import { cn } from "@/lib/utils";

type GradientTextProps = {
  className?: string;
  as: keyof JSX.IntrinsicElements;
  children: React.ReactNode | string;
};

const GradientText = ({ className, as, children }: GradientTextProps) => {
  const Component = as;

  return (
    <Component className={cn("w-fit text-foreground", className)}>
      {children}
    </Component>
  );
};

export default GradientText;
