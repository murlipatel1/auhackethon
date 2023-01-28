/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FCE9DA",
        secondary: "#F9790E",
        greyShade: "#34434B",
      },
      gridTemplateColumns: {
        summary: "1fr 2fr",
        sidebarSetGrid: "1fr 3fr",      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}
