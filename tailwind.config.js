/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        custom: {
          black: "#424141", // Default shade
          gray:'#A2A1A1',
        }
    },
    
  },
  plugins: [],
}
}

