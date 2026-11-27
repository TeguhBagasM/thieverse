import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const typography = cva(["font-bold inline-block"], {
  variants: {
    variant: {
      h2: "text-lg decoration-ring inline-block underline-offset-8 decoration-wavy underline",
      paragraph: "text-muted-foreground font-normal block text-base",
    },
    size: {
      sm: "text-sm",
    },
    font: {
      sans: "font-sans",
    },
  },
  defaultVariants: {
    variant: "h2",
  },
});

export type TypographyVariants = VariantProps<typeof typography>;

export const typo = (variants: TypographyVariants) => cn(typography(variants));
