/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        widescreen: {
          raw: "(min-aspect-ratio:16/9)",
        },
      },
      colors: {
        primary: "#bef264",
      },
      fontFamily: {
        primary: ['"Black Ops One"', ...defaultTheme.fontFamily.sans],
        secondary: ['"Anton"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {},
      keyframes: {
        name: {},
      },
      animation: {
        name: "",
      },
    },
  },
  plugins: [],
};
