/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blue: "#272343",
        green: "#029FAE",
        "secondary-white": "#f0f2f3",
        "hover-color": "#007580",
        grey: '#c5c7c5'
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 8px 40px 0px rgba(39, 35, 67, 0.08)",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }), 
  ],
};
