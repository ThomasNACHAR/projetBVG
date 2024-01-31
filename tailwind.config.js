/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xs': '400px',
      'xs': '480px',
      'sm': '650px',
      'ms': '730px',
      'ml': '940px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1600px'
    },
    
    extend: {
    },
  },
  plugins: [],
}