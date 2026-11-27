import { siteConfig } from "@/config/site";

export const heroConfig = {
  name: siteConfig.author,
  // PLACEHOLDER: ganti dengan positioning final. `role` dan `focus` disusun dari teks halaman Tentang.
  role: "Fullstack developer yang berfokus pada backend",
  focus: {
    prefix: "Saya membangun",
    // Berputar satu kali lalu berhenti di item pertama. Jaga tiap item tetap pendek (muat di 360 px).
    items: ["aplikasi web Laravel", "integrasi API", "antarmuka responsif"],
  },
  summary: `Di ${siteConfig.name}, saya mencatat apa yang saya pelajari tentang teknologi dan pengalaman saya di dunia coding.`,
  primaryCta: { label: "Lihat Proyek", href: "/projects" },
  secondaryCta: { label: "Baca Blog", href: "/blog" },
  socials: [
    { id: "github", label: "GitHub", href: siteConfig.links.github },
    { id: "linkedin", label: "LinkedIn", href: siteConfig.links.linkedin },
    { id: "instagram", label: "Instagram", href: siteConfig.links.instagram },
    { id: "email", label: "Email", href: `mailto:${siteConfig.email}` },
  ],
  scroll: { label: "Blog terbaru", targetId: "blog-terbaru" },
  // Isi layar monitor 3D. `command` diketik, `output` muncul sekaligus.
  terminal: [
    { command: "whoami", output: ["teguh"] },
    { command: "cat stack.txt", output: ["PHP  Laravel  MySQL", "JavaScript  React"] },
    { command: "php artisan serve", output: ["Server running on :8000"] },
  ],
} as const;

export type HeroSocialId = (typeof heroConfig.socials)[number]["id"];
export type TerminalStep = (typeof heroConfig.terminal)[number];
