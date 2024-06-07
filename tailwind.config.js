/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      "3xl": [
        "1.5rem",
        {
          lineHeight: "38.73px",
          letterSpacing: "-3.5%",
          fontWeight: "600",
          fontSize: "32px",
        },
      ],
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
