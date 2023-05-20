/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        manrope: "Manrope",
        inter: "Inter",
      },

      padding: {
        searchart: "220px",
      },

      colors: {
        searchart: {
          primary: "#CC3203",
          stroke: "#727272",
          background: "#ffffff",
          text: "#030712",
          footer: "#F6F6F8",
          "footer-text": "#9DA2AA",
          dark: {
            background: "linear-gradient(to bottom,#0A1525 100%,#041023 100%)",
            text: "#D0D2D6",
            footer: "#182842",
          },
        },
      },
    },
  },
  plugins: [],
};
