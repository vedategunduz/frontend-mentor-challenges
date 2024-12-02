/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        green: "#c5f82a",
        grey_900: "#141414",
        grey_800: "#1f1f1f",
        grey_700: "#333333",
      }
    },
  },
  plugins: [],
}

