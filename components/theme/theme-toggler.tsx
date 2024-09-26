"use client";

import { SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { BsMoonStarsFill } from "react-icons/bs";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("light");
        break;
      default:
        break;
    }
  };

  const toggleTheme = () => {
    // @ts-expect-error
    if (!document.startViewTransition) switchTheme();

    // @ts-expect-error
    document.startViewTransition(switchTheme);
  };

  return (
    <Button onClick={toggleTheme} variant="ghost" size="icon" className="rounded-xl">
      <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <BsMoonStarsFill className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
