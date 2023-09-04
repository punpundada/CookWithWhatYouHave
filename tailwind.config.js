const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      'xs':{'min': '300px', 'max': '430px'},
      ...defaultTheme.screens
    },
    extend: {},
  },
  plugins: [],
}

