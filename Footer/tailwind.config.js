/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lato: "'Lato', serif",
        quicksand: "'Quicksand', serif"
      },
      colors: {
        'grn': '#3BB77E',
        'grntxt' : '#3BB7A3',
        'ligrn':'#BCE3C9',
        'blck' : '#253D4E',
        'grey': '#808080',
        'ligsoc':'#D8F1E5'
      }
    },
    variants: {
      fill: ['hover', 'focus'], // this line does the trick
    },
  },
  plugins: [],
}

