import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // 60% Ice Blue Palette (Crisp, luminous main canvas & card bases)
        ice: {
          canvas: "#EBF3F6", // Main background as seen in the reference
          card: "#FFFFFF",   // Pure crisp card surface
          subtle: "#F4F9FB", // Alternate soft section
          border: "#D5E5ED", // Crisp structural line
          borderHover: "#B8D5E3",
          dark: "#688FA8",   // Muted label
        },
        // 30% Ocean Blue (Headings, primary typography, deep structural cards)
        ocean: {
          950: "#091B2C",
          900: "#102A45", // Deep primary headline ocean
          850: "#16385C",
          800: "#1D4773", // Secondary headings
          600: "#32628E", // Body copy ocean
          400: "#5B85AB", // Muted text
          200: "#9EBDD4",
        },
        // 10% Aqua Green (Exact reference: #2FD3A0 / RGB 47, 211, 160)
        aqua: {
          DEFAULT: "#2FD3A0",
          hover: "#25BC8D",
          light: "#E8FAF4",
          border: "#85E7C8",
          darkText: "#0F7A59",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        'aqua-pill': '0 8px 20px -4px rgba(47, 211, 160, 0.45)',
        'clean-card': '0 4px 20px -2px rgba(16, 42, 69, 0.06)',
        'clean-hover': '0 12px 30px -4px rgba(16, 42, 69, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
