/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FCE9DA",
        secondary: {
          DEFAULT: "#F9790E",
          light: "#f9780e23",
        },
        greyShade: "#34434B",
      },
      gridTemplateColumns: {
        summary: "1fr 2fr",
        sidebarSetGrid: "1fr 3fr",
        overviewGrid: "2fr repeat(4, 1fr)",
        buyStocksGrid: "2fr repeat(3, 1fr)",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}
