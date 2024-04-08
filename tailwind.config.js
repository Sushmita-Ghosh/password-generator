/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      red: "hsl(0,91%,63%)",
      "neon-green": "hsl(127,100%,82%)",
      orange: "hsl(13,95%,66%)",
      yellow: "hsl(42,91%,68%)",
      "almost-white": "hsl(252,11%,91%)",
      gray: "hsl(251,9%,53%)",
      "dark-gray": "hsl(248,10%,15%)",
      "darkest-grey": "hsl(248,15%,11%)",
    },
  },
  plugins: [],
};
