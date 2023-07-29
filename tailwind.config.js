/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    colors: {
      primary: {
        "dark-cyan": "hsl(158, 36%, 37%)",
        cream: " hsl(30, 38%, 92%)",
      },
      neutral: {
        "dark-cyan": "hsl(158, 36%, 37%)",
        "dark-grayish-blue": " hsl(228, 12%, 48%)",
        white: " hsl(0, 0%, 100%)",
      },
    },
    fontFamily: {
      "fraunces-700": ["Fraunces", "serif"],
      "montserrat-700": ["Montserrat", "sans-serif"],
    },
    letterSpacing: {
      wide: "8px",
    },
  },
  plugins: [],
};
