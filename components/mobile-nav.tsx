"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Icons } from "./icons";
import { Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 sm:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <DialogTitle asChild>
          <VisuallyHidden>
            <span>Navigation Menu</span>
          </VisuallyHidden>
        </DialogTitle>
        <MobileLink onOpenChange={setOpen} href="/" className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-8 w-8" />
          <span className="font-bold text-lg ml-2">{siteConfig.name}</span>
        </MobileLink>
        <div className="flex flex-col gap-6 mt-6">
          <MobileLink
            onOpenChange={setOpen}
            href="/blog"
            className="hover:text-blue-500 transition-colors"
          >
            Blogs
          </MobileLink>
          <MobileLink
            onOpenChange={setOpen}
            href="/about"
            className="hover:text-blue-500 transition-colors"
          >
            About
          </MobileLink>
          <MobileLink
            onOpenChange={setOpen}
            href="/konsultasi"
            className="hover:text-blue-500 transition-colors"
          >
            Konsultasi
          </MobileLink>
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            <Icons.gitHub className="h-6 w-6 transition-transform transform hover:scale-110" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            <Instagram className="h-6 w-6 transition-transform transform hover:scale-110" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            <Icons.linkedin className="h-6 w-6 transition-transform transform hover:scale-110" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MobileLink({ href, onOpenChange, children, className, ...props }: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
