import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "2rem",
        lg: "2.5rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        bg: "hsl(var(--bg))",
        "bg-2": "hsl(var(--bg-2))",
        "bg-3": "hsl(var(--bg-3))",
        ink: "hsl(var(--ink))",
        "ink-2": "hsl(var(--ink-2))",
        "ink-3": "hsl(var(--ink-3))",
        "ink-4": "hsl(var(--ink-4))",
        accent: "hsl(var(--accent))",
        "accent-2": "hsl(var(--accent-2))",
        "accent-soft": "hsl(var(--accent) / 0.12)",
        background: "hsl(var(--bg))",
        foreground: "hsl(var(--ink))",
        border: "hsl(var(--line-2) / 0.14)",
        input: "hsl(var(--line-2) / 0.14)",
        ring: "hsl(var(--accent))",
        primary: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(0 0% 100%)",
        },
        secondary: {
          DEFAULT: "hsl(var(--bg-2))",
          foreground: "hsl(var(--ink))",
        },
        muted: {
          DEFAULT: "hsl(var(--bg-2))",
          foreground: "hsl(var(--ink-3))",
        },
        card: {
          DEFAULT: "hsl(var(--bg-2))",
          foreground: "hsl(var(--ink))",
        },
        popover: {
          DEFAULT: "hsl(var(--bg-2))",
          foreground: "hsl(var(--ink))",
        },
        destructive: {
          DEFAULT: "hsl(0 62% 45%)",
          foreground: "hsl(0 0% 98%)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.035em",
        tight: "-0.02em",
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "6px",
      },
      animation: {
        "reveal-up": "revealUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fadeIn 0.6s ease-out both",
        pulse: "pulse 2s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        revealUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulse: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
