"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navItems } from "@/config/nav";

export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <img src="/images/logo-thieverse.png" alt="Logo" className="h-11" />
      </Link>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "relative hidden text-base font-medium transition-colors duration-150 group sm:inline-block",
            pathname === item.href ? "text-foreground" : "text-foreground/60"
          )}
        >
          {item.title}
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-200 group-hover:w-full"></span>
        </Link>
      ))}
    </nav>
  );
}
