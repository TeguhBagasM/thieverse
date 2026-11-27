import { Instagram, Mail } from "lucide-react";
import type { CSSProperties, ElementType } from "react";

import { Icons } from "@/components/icons";
import { ButtonLink } from "@/components/ui-kit/button-link";
import { heroConfig, type HeroSocialId } from "@/config/hero";
import { Magnetic } from "./magnetic";
import { RotatingText } from "./rotating-text";

const socialIcons: Record<HeroSocialId, ElementType> = {
  github: Icons.gitHub,
  linkedin: Icons.linkedin,
  instagram: Instagram,
  email: Mail,
};

const delay = (ms: number) => ({ "--hero-delay": `${ms}ms` }) as CSSProperties;

export function HeroContent() {
  const { name, role, focus, summary, primaryCta, secondaryCta, socials } = heroConfig;

  return (
    <div className="flex min-w-0 flex-col items-start text-left">
      {/* Judul hanya bergeser (tanpa opacity 0) agar langsung terhitung sebagai konten yang tampil. */}
      <h1
        id="hero-title"
        className="hero-slide text-balance text-[clamp(2.75rem,8vw,4.75rem)] font-black leading-[0.98] tracking-tight"
      >
        {name}
      </h1>

      <p className="hero-rise mt-4 text-balance text-xl font-semibold sm:text-2xl" style={delay(80)}>
        {role}
      </p>

      <p className="hero-rise mt-2 text-base text-foreground sm:text-lg" style={delay(140)}>
        <RotatingText prefix={focus.prefix} items={focus.items} />
      </p>

      <p
        className="hero-rise mt-3 max-w-[46ch] text-base leading-relaxed text-foreground/80"
        style={delay(200)}
      >
        {summary}
      </p>

      <div
        className="hero-rise mt-5 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
        style={delay(260)}
      >
        <Magnetic className="w-full sm:w-auto">
          <ButtonLink href={primaryCta.href} size="lg" className="hero-shine w-full">
            {primaryCta.label}
          </ButtonLink>
        </Magnetic>
        <Magnetic className="w-full sm:w-auto">
          <ButtonLink
            href={secondaryCta.href}
            variant="secondary"
            size="lg"
            className="hero-shine w-full border-foreground/25"
          >
            {secondaryCta.label}
          </ButtonLink>
        </Magnetic>
      </div>

      {/* -ml-2.5 menyejajarkan tepi ikon (bukan area sentuhnya) dengan garis kiri teks. */}
      <ul className="hero-rise -ml-2.5 mt-2 flex gap-1 sm:mt-5" style={delay(320)}>
        {socials.map(({ id, label, href }) => {
          const Icon = socialIcons[id];
          const external = href.startsWith("http");

          return (
            <li key={id}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="flex size-11 items-center justify-center rounded text-muted-foreground transition-colors duration-150 hover:text-primary"
              >
                <Icon className="size-5" aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
