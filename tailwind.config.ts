import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        clamp: "clamp(2rem, 5vw, 6rem)",
        strokeClamp: "clamp(3rem, 10vw, 15rem)",
      },

      colors: {
        primary: "#a2a2a3",
        secondary: "#fff",
      },
    },
  },
  plugins: [],
};
export default config;
