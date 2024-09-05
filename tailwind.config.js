/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
      },
      backgroundImage: {
        "hero-pattern": "url(/src/assets/images/herobg.png)",
      },
    },
  },
  plugins: [],
};
