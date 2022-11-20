/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "12rem": "12rem",
      },
      keyframes: {
        fadeInOnLoad: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
        fadeInOnLoadWithDelay: {
          "0%": { opacity: "0" },
          "10%": { opacity: "0" },
          "20%": { opacity: "0" },
          "30%": { opacity: "0" },
          "40%": { opacity: "0" },
          "50%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
      },
      animation: {
        "fade-in-on-load": "fadeInOnLoad 0.5s linear",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#581C87",
        },
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#8e4de3",
        },
      },
    ],
  },
};
