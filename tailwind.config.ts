import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-display, ui-sans-serif)", ...fontFamily.sans],
        display: ["var(--font-display, ui-sans-serif)", ...fontFamily.sans],
        body: ["var(--font-body, Georgia)", "Georgia", "serif"],
        mono: ["var(--font-mono, ui-monospace)", ...fontFamily.mono],
      },
      typography: () => ({
        DEFAULT: {
          css: {
            fontFamily: "var(--font-body, Georgia), Georgia, serif",
            "h1, h2, h3, h4": {
              fontFamily: "var(--font-display, ui-sans-serif), ui-sans-serif, system-ui, sans-serif",
            },
          },
        },
        invert: {
          css: {
            fontFamily: "var(--font-body, Georgia), Georgia, serif",
            "h1, h2, h3, h4": {
              fontFamily: "var(--font-display, ui-sans-serif), ui-sans-serif, system-ui, sans-serif",
            },
          },
        },
      }),
      colors: {
        paper: "hsl(var(--color-paper))",
        surface: "hsl(var(--color-surface))",
        ink: "hsl(var(--color-ink))",
        line: "hsl(var(--color-line))",
        focus: "hsl(var(--color-focus))",
        "accent-soft": "hsl(var(--color-accent-soft))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        DEFAULT: "4px",
        sm: "4px",
        md: "4px",
        lg: "8px",
        xl: "8px",
        "2xl": "8px",
        "3xl": "8px",
      },
      keyframes: {
        "shadow-animate": {
          "0%": { boxShadow: "0 0 8px 4px rgba(59, 130, 246, 0.7)" }, // Initial shadow
          "25%": { boxShadow: "0 0 8px 4px rgba(236, 72, 153, 0.7)" }, // Intermediate shadow
          "50%": { boxShadow: "0 0 8px 4px rgba(168, 85, 247, 0.7)" }, // Middle shadow
          "75%": { boxShadow: "0 0 8px 4px rgba(236, 72, 153, 0.7)" }, // Intermediate shadow
          "100%": { boxShadow: "0 0 8px 4px rgba(59, 130, 246, 0.7)" }, // Final shadow
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        roll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "shadow-animate": "shadow-animate 4s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        roll: "roll 24s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
