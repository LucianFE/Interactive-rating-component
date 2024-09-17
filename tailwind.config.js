/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/js/*.js"],
  theme: {
    extend: {
      colors: {
        "very-dark-blue": "hsl(216, 12%, 8%)",
        "dark-blue": "hsl(213, 19%, 18%)",
        "lighter-dark-blue": "hsla(210, 22%, 22%)",
        "light-grey": "hsl(217, 12%, 63%)",
        "orange-clr": "hsl(25, 97%, 53%)",
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
    },
  },
  plugins: [],
};
