/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        home: "url('/images/background.png')",
      }),
      colors: {
        primary: '#040714',
        secondary: '#f9f9f9',
        gray: '#c6c6c6',
      },
    },
    fontFamily: {
      body: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
