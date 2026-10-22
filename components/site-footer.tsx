import { siteConfig } from "@/config/site";
import { Heart, Instagram, Mail } from "lucide-react";
import { Icons } from "./icons";
import Link from "next/link";
import { navItems } from "@/config/nav";

export function SiteFooter() {
  return (
    <footer className="bg-slate-200 dark:bg-slate-900 py-6 text-gray-950 dark:text-gray-200 mt-8">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        <div className="flex items-center space-x-4">
          <img src="/images/logo.png" alt="Logo" className="h-12 w-12" />
          <div>
            <p className="font-semibold text-lg">{siteConfig.name}</p>
            <div className="flex items-center justify-center text-sm">
              Made with <Heart className="text-red-500 h-4 w-4 mx-1" /> by{" "}
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 ml-1 transition-colors duration-200 hover:underline"
                aria-label={`Visit ${siteConfig.author}'s LinkedIn profile`}
              >
                {siteConfig.author}
              </Link>
            </div>
          </div>
        </div>

        <nav aria-label="Navigasi footer" className="flex flex-wrap justify-center gap-4 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 dark:text-gray-300 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
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
            className="transition-transform transform hover:scale-110"
            aria-label="Kirim email ke Teguh Bagas M"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.linkedin}
            className="transition-transform transform hover:scale-110"
            aria-label="LinkedIn Teguh Bagas M"
          >
            <Icons.linkedin className="h-6 w-6" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className="transition-transform transform hover:scale-110"
            aria-label="GitHub Teguh Bagas M"
          >
            <Icons.gitHub className="h-6 w-6" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.instagram}
            className="transition-transform transform hover:scale-110"
            aria-label="Instagram Teguh Bagas M"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Thieverse, All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
