/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", ".src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    color: {
      darkBlack: "#151515",
      darkGreen: "#4EE1AO",
      darkGray: "#242424",
      lightGray: "#D9D9D9",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        "space-grotesk-bold": ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
