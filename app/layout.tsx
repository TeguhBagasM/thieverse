import type { Metadata, Viewport } from "next";
import { fontBody, fontDisplay, fontMono } from "./fonts";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/config/site";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme/theme-provider";
import ChatbaseWidget from "@/components/chatbase-widget";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
  title: {
    default: `${siteConfig.name} — Catatan Belajar & Portofolio`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.author, url: siteConfig.links.personalSite }],
  creator: siteConfig.author,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Catatan Belajar & Portofolio`,
    description: siteConfig.description,
    images: [
      {
        url: "/api/og?title=Thieverse",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Catatan Belajar & Portofolio`,
    description: siteConfig.description,
    images: ["/api/og?title=Thieverse"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#E9EDE7" },
    { media: "(prefers-color-scheme: dark)", color: "#121A16" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-pt-[3.5rem]" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="A7Tf1CNgvk_g20vK1y-5Ld4p_vVG3x6nj1JvFPEbUag" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontDisplay.variable,
          fontBody.variable,
          fontMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="relative flex min-h-dvh flex-col bg-background">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
            <ChatbaseWidget />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
