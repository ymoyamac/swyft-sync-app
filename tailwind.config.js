/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#181a1d",
        secondaryDark: "#282b30",
        lowDark: "#36393e",
        primary: "#0044d5",
        secondary: "#7289da",
      },
    },
  },
  plugins: [],
}

