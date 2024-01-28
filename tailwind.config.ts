import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        onyx: {
          "50": "#f4f4f4",
          "100": "#d4d4d4",
          "200": "#bfbfbf",
          "300": "#a1a1a1",
          "400": "#7d7d7d",
          "500": "#616161",
          "600": "#4a4a4a",
          "700": "#363636",
          "800": "#292929",
          "900": "#212121",
          "950": "#0d0d0d",
        },
      },
    },
  },
  plugins: [],
};
export default config;
