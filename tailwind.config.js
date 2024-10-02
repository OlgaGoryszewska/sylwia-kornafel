/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D0CFD4',
        black: '#252323',
        brown: '#CB845C',
        gold: '#B5983F',
      },
      fontFamily: {
        popins: ['Poppins', 'sans-serif'],
        bochan: ['Bochan', 'sans-serif'],
        bochanstyled: ['BochanAlternative', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
