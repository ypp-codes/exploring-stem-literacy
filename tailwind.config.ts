import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "#00A973",
        "accent-hover": "#018A5E",
        secondary: "#05714F",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        logo: ["var(--font-argon)", "monospace"],
      },
    },
  },
  plugins: [typography],
};
export default config;
