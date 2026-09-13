import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF6EF",
        ink: "#232420",
        sage: {
          DEFAULT: "#3F5D54",
          light: "#5C7C71",
          dark: "#2C4139",
        },
        clay: {
          DEFAULT: "#8C5A3C",
          light: "#A9764F",
        },
        gold: {
          DEFAULT: "#C9A15E",
          light: "#DDBE8A",
        },
        linen: "#F1E9DA",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};
export default config;
