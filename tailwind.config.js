module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'primary':'#F63E7B',
        'secendary':'#F63E7B',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
