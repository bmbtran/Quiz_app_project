/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      height: {
        'screen-1/9': '10%',
        'screen-9/10': '89.5%',
      },
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

