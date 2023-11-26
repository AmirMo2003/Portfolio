/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Green: "#37806B",
        bg: "#DEDEDE",
        bg_statictis: "#ECEBEB",
        bg_light: "#F3F4F6",
        bg_Portfolio: "#DBDCE0",
        purple: "#9333EA",
      },
      screen: {
        max_990: { max: "990px" },
      },
    },
  },
  plugins: [],
};
