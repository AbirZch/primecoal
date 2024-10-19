/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'JosefinSans':['"Josefin Sans"','sans-serif']
    },
    extend: {
      backgroundColor :{lightgray:"#1F1F1F",orangy:"#EA5D42"},
      colors :{orangy:"#EA5D42"},
      backgroundImage:{mainCard:"url('/main-card.png')",backgroundImg:"url('/background.png')"}
     
}
    },
  
  plugins: [],
}

