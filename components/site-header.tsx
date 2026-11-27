import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { Instagram } from "lucide-react";
import ThemeToggler from "./theme/theme-toggler";

const socialLinks = [
  { href: siteConfig.links.linkedin, label: "LinkedIn", Icon: Icons.linkedin },
  { href: siteConfig.links.github, label: "GitHub", Icon: Icons.gitHub },
  { href: siteConfig.links.instagram, label: "Instagram", Icon: Instagram },
];

export function SiteHeader() {
  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            {socialLinks.map(({ href, label, Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className={cn(buttonVariants({ variant: "ghost" }), "hidden w-10 px-0 sm:inline-flex")}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </Link>
            ))}
            <ThemeToggler />
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
}
