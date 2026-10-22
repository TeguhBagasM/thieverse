import { Archivo, IBM_Plex_Mono, Literata } from "next/font/google";

export const fontDisplay = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

export const fontBody = Literata({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
  fallback: ["ui-monospace", "SFMono-Regular", "monospace"],
});
