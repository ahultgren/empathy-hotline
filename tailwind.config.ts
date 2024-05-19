import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      backgroundColor: {
        gray: "#f8f8f8",
        darkgray: "#e7e7e7",
      },
      textColor: {
        gray: "#777",
        grayactive: "#555",
        grayhover: "#333",
      },
      dropShadow: {
        lg: "2px 2px 3px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};
export default config;