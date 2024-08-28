/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': {'min':"300px",'max':"599px"},  
      'sm': {'min':"600px",'max':"899px"},
      'md': {'min':'900px','min':'1440px'},
    },
  },
  plugins: [],
}