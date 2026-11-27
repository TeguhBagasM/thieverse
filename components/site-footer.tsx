import { siteConfig } from "@/config/site";
import { Heart, Instagram, Mail } from "lucide-react";
import { Icons } from "./icons";
import Link from "next/link";
import { navItems } from "@/config/nav";

export function SiteFooter() {
  return (
    <footer className="mt-8 bg-surface py-6 text-foreground">
      <div className="container flex flex-col items-center space-y-6">
        <div className="flex items-center space-x-4">
          <img src="/images/logo.png" alt="Logo" className="h-12 w-12" />
          <div>
            <p className="font-semibold text-lg">{siteConfig.name}</p>
            <div className="flex items-center justify-center text-sm">
              Made with <Heart className="text-focus h-4 w-4 mx-1" /> by{" "}
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-primary transition-colors duration-150 hover:underline"
                aria-label={`Visit ${siteConfig.author}'s LinkedIn profile`}
              >
                {siteConfig.author}
              </Link>
            </div>
          </div>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-4 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition-colors duration-150 hover:text-primary"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:teguhbagas2134@gmail.com"
            className="transition-colors duration-150 hover:text-primary"
            aria-label="Send email to Teguh Bagas M"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.linkedin}
            className="transition-colors duration-150 hover:text-primary"
            aria-label="LinkedIn Teguh Bagas M"
          >
            <Icons.linkedin className="h-6 w-6" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className="transition-colors duration-150 hover:text-primary"
            aria-label="GitHub Teguh Bagas M"
          >
            <Icons.gitHub className="h-6 w-6" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.instagram}
            className="transition-colors duration-150 hover:text-primary"
            aria-label="Instagram Teguh Bagas M"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>

        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Thieverse, All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
