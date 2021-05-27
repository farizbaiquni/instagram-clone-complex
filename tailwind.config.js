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
        medium: '#005c98',
        post: '#0095f6'
      },
      black: {
        light: '#005c98',
        primary: '#000000',
        faded: 'rgba(0,0,0,0.5)'
      },
      gray: {
        base: '#616161',
        background: '#fafafa',
        primary: '#dbdbdb',
        text: '#989898'
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
        'header-profile-photo': '150px',
        'header-profile-photo-sm': '80px',
        'photos-collection' : "280px",
        "one-hundred-percent" : "100%",
        "fivety-percent" : "50%",
        "minus-fivety-percent" : "-50%"
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
      },

      maxWidth: {
        'header-profile': '614px',
        'photos-collection' : "280px",
      }
      ,
      maxHeight: {
        'photos-collection' : "280px",
      },

    }, 
    
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
