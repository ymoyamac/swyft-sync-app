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
        "primary": "#7480ff",
        "secondary": "#a0b0ff",
        "tertiary": "#edf1ff",
        "high-primary": "#1c184e",
        "primary-low": "#006aff",
        "white-low": "#efefef"
      },
    },
  },
  plugins: [require("daisyui")],
}

