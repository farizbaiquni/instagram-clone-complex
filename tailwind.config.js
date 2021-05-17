/* eslint-disable no-undef */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    fill: theme => ({
      red: theme('colors.red.primary'),
    }),

    colors:{
      white : '#ffffff',
      blue: {
        medium: '#005c98'
      },
      black: {
        light: '#005c98',
        primary: '#000000'
      },
      gray: {
        base: '#616161',
        background: '#fafafa',
        primary: '#dbdbdb'
      },
      red: {
        primary: '#ed4956'
      }
    },

    extend: {
      // Adds a new breakpoint in addition to the default breakpoints
      spacing: {
        'ig-photo-width': '614px',
        'ig-photo-height': '614px',
      }, 

      screens: {
        '2xl-max': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl-max': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg-max': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md-max': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm-max': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      }
    }
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
