import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/config/site";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme/theme-provider";
import ChatbaseWidget from "@/components/chatbase-widget";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[3.5rem]" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="A7Tf1CNgvk_g20vK1y-5Ld4p_vVG3x6nj1JvFPEbUag" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
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
