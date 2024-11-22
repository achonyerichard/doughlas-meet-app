import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ABBB00",
        glassLight: "rgba(0, 0, 0, 0.1)",
        glassDark: "rgba(255, 255, 255, 0.1)",
      },
     
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
