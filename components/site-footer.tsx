import { siteConfig } from "@/config/site";
import { Heart, Mail } from "lucide-react";
import { Icons } from "./icons";

export function SiteFooter() {
  return (
    <footer className="bg-gray-200 text-gray-950 dark:bg-gray-900 dark:text-gray-200 py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="mb-6 flex space-x-4">
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:teguhbagas2134@gmail.com"
            className="transition-transform transform hover:scale-110"
          >
            <span className="sr-only">Mail</span>
            <Mail className="h-6 w-6" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.instagram}
            className="transition-transform transform hover:scale-110"
          >
            <span className="sr-only">Instagram</span>
            <Icons.instagram className="h-6 w-6" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className="transition-transform transform hover:scale-110"
          >
            <span className="sr-only">GitHub</span>
            <Icons.gitHub className="h-6 w-6" />
          </a>
        </div>
        <div className="flex flex-col items-center text-sm text-gray-800 dark:text-gray-300">
          <a
            href={siteConfig.links.personalSite}
            target="_blank"
            className="flex items-center cursor-default"
          >
            Made with <Heart className="text-red-500 h-4 w-4 mx-1" /> by{" "}
            <span className="hover:text-blue-700 text-blue-500 dark:hover:text-blue-400 ml-1 cursor-pointer">
              {siteConfig.author}
            </span>
          </a>
          <span className="mt-2">© 2024 | All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
