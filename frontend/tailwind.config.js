/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customPink: "#f9b2bc",
        customLake: "#9ccfce",
        customBlue: "#c2dad6",
        customYellow: "#fdf3d6",
        customPinklit: "#fee3ec",
        customOrange: "#ffbe98",
        customGreen: "#d3edc5",
      },
    },
  },
  plugins: [],
};
