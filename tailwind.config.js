module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:
        
            {
              gai3:{
            

                50: '#d7fff9',
                100: '#aaffff',
                200: '#7af8ff',
                300: '#48eeff',
                400: '#1ae1ff',
                500: '#00bfe6',
                600: '#00a1b4',
                700: '#007c82',
                800: '#00504f',
                900: '#001f1f',

            },
            bms:
            {
              50: '#edf1fc',
              100: '#d3d4e1',
              200: '#b6b8c9',
              300: '#989bb2',
              400: '#7c7f9b',
              500: '#636582',
              600: '#4c4f66',
              700: '#363849',
              800: '#21222e',
              900: '#F84464',
            }
          },
       
          
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
