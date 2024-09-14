/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0B99FA',
        secondary: '#B202EC', 
        background: '#0F0619',
        success: '#24A69A',
        error: '#EE534F',
      },
    },
  },
  plugins: [],
}

