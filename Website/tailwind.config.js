/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '50':'50%',
        '40':'40%',
      },
      width:{
        'resp':'100%'
      },
      margin:{
        'crisp': '201px',
        'burger':'700px',
        'topper': '104px'
      },
      colors:{
      'awesome': '#15E6CD',
      'navBack': '#041d29'
      }
    },
  },
  plugins: [],
}