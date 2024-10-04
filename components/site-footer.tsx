"use client";

import { siteConfig } from "@/config/site";
import { Clock, Heart, Instagram, Mail } from "lucide-react";
import { Icons } from "./icons";
import React from "react";

export function SiteFooter() {
  const [time, setTime] = React.useState<string>("");

  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const jakartaTime = new Intl.DateTimeFormat("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Jakarta",
      }).format(now);
      setTime(jakartaTime + " WIB");
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-slate-200 dark:bg-slate-900 py-6 text-gray-950 dark:text-gray-200 mt-8">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        <div className="flex items-center space-x-4">
          <img src="/images/logo.png" alt="Logo" className="h-12 w-12" />
          <div>
            <h1 className="font-semibold text-lg">{siteConfig.name}</h1>
            <a
              href={siteConfig.links.personalSite}
              target="_blank"
              className="flex items-center justify-center text-sm"
            >
              Made with <Heart className="text-red-500 h-4 w-4 mx-1" /> by{" "}
              <span className="hover:text-blue-700 text-blue-500 dark:hover:text-blue-400 ml-1">
                {siteConfig.author}
              </span>
            </a>
          </div>
        </div>
        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:teguhbagas2134@gmail.com"
            className="transition-transform transform hover:scale-110"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.linkedin}
            className="transition-transform transform hover:scale-110"
          >
            <Icons.linkedin className="h-6 w-6" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className="transition-transform transform hover:scale-110"
          >
            <Icons.gitHub className="h-6 w-6" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.instagram}
            className="transition-transform transform hover:scale-110"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>

        <div className="flex items-center text-sm">
          <Clock className="h-4 w-4 mr-1 text-blue-500" />
          <span>{time}</span>
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-400">
          &copy; 2024 Thieverse, All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
