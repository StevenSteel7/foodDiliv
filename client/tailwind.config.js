/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      hi: ["'Sofia'", 'cursive']
    },
    extend: {
      padding:{
        '1/3': '33.3333%',
        '2/3': '66.6667%'
      }
  
    },
  },
  plugins: [],
}
       
