import { ArrowDown } from "lucide-react";

import { Container } from "@/components/ui-kit/container";
import { heroConfig } from "@/config/hero";

export function ScrollIndicator() {
  const { label, targetId } = heroConfig.scroll;

  return (
    <Container className="w-full pb-4">
      <a
        href={`#${targetId}`}
        className="-ml-1 inline-flex min-h-11 items-center gap-2 rounded px-1 text-sm font-medium text-foreground/80 transition-colors duration-150 hover:text-primary"
      >
        <ArrowDown className="hero-bob size-4" aria-hidden="true" />
        {label}
      </a>
    </Container>
  );
}
