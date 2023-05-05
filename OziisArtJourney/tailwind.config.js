/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        customfont: ['Poppins'],
        headerFont: ['Yeseva One']
      },
      colors :{
        veryDarkGray: '#121212',
        darkGray: '#292929',
        middleGray:'#3f3f3f',
        lightGray:'#6c6c6c',
        lighterGray:'#999999',
        brightGrey:'#E8E9EB',
        babyPowder: '#FDFFFC',
        veryLightGray : '	#fafafa',
        Purple:'#8685EF',
        HanPurple:'#5927E5',
        yellow:'#FEFEDF',
        sun:'#ff584e',
        Turquoise:'#50d8d7',
        BlueViolet:'#6A3BE4',
        BlueGreen:'#00C4CC',
        paleGreen: '#dde7dd',
        earthGreen: '#6a8f6b',
        neutralGreen: '#6a7b6b',
        brightGreen:'#bfe7a2',
        midnightBlue: ' #221c42',
        lightBrown: '#fffbf5',
        brown: '#8b6741'
        
        

      }
    },
  },
  plugins: [],
}
