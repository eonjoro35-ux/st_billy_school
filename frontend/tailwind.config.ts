import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        forest: {
          50: "rgb(var(--forest-50) / <alpha-value>)",
          100: "rgb(var(--forest-100) / <alpha-value>)",
          200: "rgb(var(--forest-200) / <alpha-value>)",
          300: "rgb(var(--forest-300) / <alpha-value>)",
          400: "rgb(var(--forest-400) / <alpha-value>)",
          500: "rgb(var(--forest-500) / <alpha-value>)",
          600: "rgb(var(--forest-600) / <alpha-value>)",
          700: "rgb(var(--forest-700) / <alpha-value>)",
          800: "rgb(var(--forest-800) / <alpha-value>)",
          900: "rgb(var(--forest-900) / <alpha-value>)",
        },
        marigold: {
          50: "rgb(var(--marigold-50) / <alpha-value>)",
          100: "rgb(var(--marigold-100) / <alpha-value>)",
          200: "rgb(var(--marigold-200) / <alpha-value>)",
          300: "rgb(var(--marigold-300) / <alpha-value>)",
          400: "rgb(var(--marigold-400) / <alpha-value>)",
          500: "rgb(var(--marigold-500) / <alpha-value>)",
          600: "rgb(var(--marigold-600) / <alpha-value>)",
          700: "rgb(var(--marigold-700) / <alpha-value>)",
          800: "rgb(var(--marigold-800) / <alpha-value>)",
          900: "rgb(var(--marigold-900) / <alpha-value>)",
        },
        brick: {
          500: "rgb(var(--brick-500) / <alpha-value>)",
          600: "rgb(var(--brick-600) / <alpha-value>)",
        },
        line: "rgb(var(--line) / <alpha-value>)",
      },
      fontFamily: {
        display: ["'Fraunces'", "ui-serif", "Georgia", "serif"],
        body: ["'Work Sans'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      boxShadow: {
        card: "0 1px 2px rgba(28, 43, 34, 0.06), 0 8px 24px -12px rgba(28, 43, 34, 0.18)",
      },
    },
  },
  plugins: [],
} satisfies Config;
