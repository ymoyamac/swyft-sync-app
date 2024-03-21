/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#101014",
        "secondary-dark": "#282b30",
        "low-dark": "#181a1d",
        "primary": "#483dee",
        "secondary": "#5b5df9",
        "tertiary": "#edf1ff",
        "high-primary": "#1c184e",
        "primary-low": "#a0b0ff",
        "white-low": "#efefef"
      },
    },
  },
  plugins: [require("daisyui")],
}

