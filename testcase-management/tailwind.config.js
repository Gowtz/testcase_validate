/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryBG:"#00193c",
        secondaryBG:"#0a3773"

      }
    },
  },
  plugins: [],
}

