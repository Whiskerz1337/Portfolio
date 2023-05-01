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
        arcade: '#3949AB',
        grey: '#B8B8B8',
        lime: '#32CD32',
        orange: '#FFA500',
        crimson: '#DC143C',
        steelblue600: '#4682B4',
        steelblue700: '#3b6c97',
        newindigo: '#3949AB',
      },
      fontFamily: {
        exo: ['exo', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      borderColor: {
        arcade: '#3949AB',
        sith: '#CC2442',
        lime: '#32CD32',
        grey: '#B8B8B8',
      },
      backgroundImage: () => ({
        'inverted-circle-radial-gradient':
          'radial-gradient(circle, #000000 10%, #010003 25%, #020005 40%, #030010 55%, #040015 70%, #050020 85%)',
        'subtle-radial-gradient':
          'radial-gradient(circle, #000000 0%, #1f1f1f 40%, #3f3f3f 80%, #5f5f5f 100%)',
        'inverted-subtle-radial-gradient':
          'radial-gradient(circle, #5f5f5f 0%, #3f3f3f 40%, #1f1f1f 80%, #000000 100%)',
        'faster-black-radial-gradient':
          'radial-gradient(circle at 50% 45%, #040015 20%, #030012 35%, #020006 45%, #010009 60%, #010005 75%, #000000 90%)',
      }),
    },
  },
  variants: {},
  plugins: [],
}
