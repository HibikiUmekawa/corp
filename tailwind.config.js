import { heroui } from "@heroui/theme";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    typography,
    heroui({
      defaultTheme: "light",
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#11181C",
            default: {
              DEFAULT: "#FFFFFF",
              foreground: "#11181C",
            },
            primary: {
              DEFAULT: "#00C8CB",
              foreground: "#FFFFFF",
            },
            content1: {
              DEFAULT: "#FFFFFF",
              foreground: "#11181C",
            },
            content2: {
              DEFAULT: "#F4F4F5",
              foreground: "#11181C",
            },
            content3: {
              DEFAULT: "#E4E4E7",
              foreground: "#11181C",
            },
            content4: {
              DEFAULT: "#D4D4D8",
              foreground: "#11181C",
            },
          },
        },
      },
    }),
  ],
};

module.exports = config;
