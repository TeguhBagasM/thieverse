import { siteConfig } from "@/config/site";

export const heroConfig = {
  name: siteConfig.author,
  // PLACEHOLDER: replace with final positioning. `role` and `focus` are drawn from the About page.
  role: "Fullstack developer focused on backend",
  focus: {
    prefix: "I build",
    // Berputar satu kali lalu berhenti di item pertama. Jaga tiap item tetap pendek (muat di 360 px).
    items: ["Laravel web applications", "API integrations", "responsive interfaces"],
  },
  summary: `At ${siteConfig.name}, I share what I learn about technology and my experience in the coding world.`,
  primaryCta: { label: "View Projects", href: "/projects" },
  secondaryCta: { label: "Read Blog", href: "/blog" },
  socials: [
    { id: "github", label: "GitHub", href: siteConfig.links.github },
    { id: "linkedin", label: "LinkedIn", href: siteConfig.links.linkedin },
    { id: "instagram", label: "Instagram", href: siteConfig.links.instagram },
    { id: "email", label: "Email", href: `mailto:${siteConfig.email}` },
  ],
  scroll: { label: "Latest posts", targetId: "blog-terbaru" },
  // Isi layar monitor 3D. `command` diketik, `output` muncul sekaligus.
  terminal: [
    { command: "whoami", output: ["teguh"] },
    { command: "cat stack.txt", output: ["PHP  Laravel  MySQL", "JavaScript  React"] },
    { command: "php artisan serve", output: ["Server running on :8000"] },
  ],
} as const;

export type HeroSocialId = (typeof heroConfig.socials)[number]["id"];
export type TerminalStep = (typeof heroConfig.terminal)[number];
