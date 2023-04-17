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
        arcade: '#00E0E0',
      },
      textColor: {
        primary: '#FFFFFF',
        secondary: '#000000',
        sith: '#CC2442',
        arcade: '#00E0E0',
      },
      fontFamily: {
        exo: ['exo', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      borderColor: {
        arcade: '#00E0E0',
      },
    },
  },
  variants: {},
  plugins: [],
}
