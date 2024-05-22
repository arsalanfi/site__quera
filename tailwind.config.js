/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: { 
    extend: {
      screens: {
        'sm': '360px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        "primary": "#2C7EF8",
        "primary-hover": "#075CD9",
        "primary-on-light": "#EBEDEF",
        "background-light": "#EBEDEF",
        "on-background-light": "#191C1E",
        "surface-light": "#EBEDEF",
        "success": "#90F677",
        "errors": "#E63946 ",
        "primary__back":"#FFFFFF"
      },
      fontFamily:{
        body:['Yekan bakh']
      }
    },
  },
  plugins: [],
}