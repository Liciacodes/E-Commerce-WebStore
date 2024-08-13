/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
    },
    extend: {
      fontFamily: {
        manropeFont: ['"Manrope"', "sans-serif"],
        interFont: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
