module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './ containers/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: {
          primary: 'var(--background-primary)',
          secondary: 'var(--background-secondary)'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
