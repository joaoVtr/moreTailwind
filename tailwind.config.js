/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./pages/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        azul: {
          100: "#0038FF",
          200: "#00389A",
          300: "#003865",
        },
      },
    },
  },
  plugins: [],
};
