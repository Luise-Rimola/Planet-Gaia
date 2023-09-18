/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#f8f8ff",
        secondary: "#808080",
        tertiary: "#696969",
        "black-100": "#696969",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "yellowgreen": "#9acd32",
        "darkgrey" : "#a9a9a9",
        "forestgreen" : "#228b22",
        "seagreen" : "#2e8b57",
        "lightgrey" : "#DADCDB",
        "lightgrey2" : "#e1e1e3",
        

      },
      boxShadow: {
        card: "0px 35px 120px -15px #dcdcdc",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};