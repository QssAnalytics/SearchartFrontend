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
          background: "#ffffff",
          dark: {
            background: "linear-gradient(to bottom,#0A1525 100%,#041023 100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
