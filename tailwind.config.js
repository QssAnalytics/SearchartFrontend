/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: "Manrope",
        inter: "Inter",
      },

      container: {
        center: true,
        padding: "13.75rem",
      },
    },
  },
  plugins: [],
};
