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
      },
    },
    fontFamily: {
      body: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}
