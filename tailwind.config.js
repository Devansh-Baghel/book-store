/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main_yellow: "#FFCE1A",
      },
      fontFamily: {
        main: ["Montserrat", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
