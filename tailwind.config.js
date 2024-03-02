/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#181a1d",
        "secondary-dark": "#282b30",
        "low-dark": "#36393e",
        "primary": "#0044d5",
        "secondary": "#7289da",
        "primary-low": "#006aff",
        "white-low": "#efefef"
      },
    },
  },
  plugins: [],
}

