/* eslint-env node */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#000000',
        secondary: '#B8B8B8',
        white: '#FFFFFF',
        sith: '#CC2442',
        arcade: '#4682B4',
        lime: '#32CD32',
        orange: '#FFA500',
        crimson: '#DC143C',
        grey: '#808080',
        steelblue600: '#4682B4',
        steelblue700: '#3b6c97',
      },
      textColor: {
        primary: '#D3D3D3',
        secondary: '#F8F8FF',
        sith: '#CC2442',
        arcade: '#4682B4',
        grey: '#B8B8B8',
        lime: '#32CD32',
        orange: '#FFA500',
        crimson: '#DC143C',
        steelblue600: '#4682B4',
        steelblue700: '#3b6c97',
      },
      fontFamily: {
        exo: ['exo', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      borderColor: {
        arcade: '#3b6c97',
        sith: '#CC2442',
        lime: '#32CD32',
        grey: '#B8B8B8',
      },
    },
  },
  variants: {},
  plugins: [],
}
