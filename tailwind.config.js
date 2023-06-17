/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blue: colors.trueBlue,
        blue: {
          900: '#3550DC',
          800: '#27E9F7',
        }
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif']
      },
    },
  },
  plugins: [],
}

