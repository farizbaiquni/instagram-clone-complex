/* eslint-disable no-undef */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: (theme) => ({
      red: theme('color-red-primary')
    }),
    colors:{
      white : '#ffffff',
      blue: {
        medium: '#005c98'
      },
      black: {
        light: '#005c98',
      },
      gray: {
        base: '#616161',
        background: '#fafafa',
        primary: '#dbdbdb'
      },
      red: {
        primary: '#ed4956'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
