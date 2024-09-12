/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Baloo Bhaijaan 2"', "ui-sans-serif", "system-ui"],
      },
      colors: {
        customDarkBrown: "#533f38",
        customBrown: "#986c51",
        customgray: "#a8978d",
        customLightBrown: "#be8e60",
        customYellow: "#f4ecda",
        customOrange: "#ffbe98",
        customDarkOrange: "#bc0008",
        customRed: "#cc7152",
      },
      boxShadow: {
        custom:
          "4px 4px 8px rgba(0, 0, 0, 0.4), -4px -4px 8px rgba(255, 255, 255, 0.05)",
        hover:
          "6px 6px 12px rgba(0, 0, 0, 0.4), -6px -6px 12px rgba(255, 255, 255, 0.05)",
      },
    },
  },
  plugins: [],
};
