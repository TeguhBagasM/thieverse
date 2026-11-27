import { Container } from "@/components/ui-kit/container";
import { HeroContent } from "./hero-content";
import { HeroScene } from "./hero-scene";
import { ScrollIndicator } from "./scroll-indicator";

export function Hero() {
  return (
    // -mt-20/pt-20: hero menembus ke belakang header (h-20) sehingga tingginya pas satu layar.
    <section
      aria-labelledby="hero-title"
      className="hero-backdrop relative isolate -mt-20 flex min-h-[100svh] flex-col overflow-hidden pt-20"
    >
      <Container className="grid w-full flex-1 content-center items-center gap-4 py-4 sm:gap-6 sm:py-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10">
        <HeroContent />
        <HeroScene />
      </Container>
      <ScrollIndicator />
    </section>
  );
}
