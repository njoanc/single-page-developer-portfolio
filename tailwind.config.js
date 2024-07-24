/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    color: {
      dark_black: "#151515",
      dark_green: "#4EE1AO",
      dark_gray: "#242424",
      light_gray: "#D9D9D9",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
