/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      base: ["18px", "28px"],
      md: ["24px", "32px"],
      xm: [
        "32px",
        {
          letterSpacing: "-.444px",
          fontWeight: "700",
          lineHeight: "32px",
        },
      ],
      h1: [
        "40px",
        {
          letterSpacing: "-1.13636px",
          fontWeight: "700",
          lineHeight: "40px",
        },
      ],
      h1md: [
        "72px",
        {
          letterSpacing: "-2.04545px",
          fontWeight: "700",
          lineHeight: "80px",
        },
      ],
      lg: [
        "48px",
        { letterSpacing: "-1.5px", fontWeight: "700", lineHeight: "56px" },
      ],
      xl: [
        "88px",
        { letterSpacing: "-2.8px", fontWeight: "700", lineHeight: "88px" },
      ],
    },
    extend: {
      screens: {
        "2xl": "1440px",
      },
      colors: {
        "very-black": "#151515",
        "dark-gray": "#242424",
        green: "#4EE1A0",
        "light-gray": "#d9d9d9",
        red: "#ff6f5b",
      },
      fontFamily: {
        SpaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
