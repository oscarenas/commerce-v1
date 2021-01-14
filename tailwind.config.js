module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      body: ['"Montserrat"', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
