module.exports = {
  darkMode: 'class',
  content: [
    './portfolio_re/templates/**/*.html',
    './portfolio_re/static/src/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        // Your custom colors
        gray: {
          100: 'oklch(96.7% 0.003 264.542)',
          300: 'oklch(87.2% 0.01 258.338)',
          600: 'oklch(44.6% 0.03 256.802)',
          700: 'oklch(37.3% 0.034 259.733)',
          800: 'oklch(27.8% 0.033 256.848)',
          900: 'oklch(21% 0.034 264.665)'
        },
      },
      animation: {
        move: 'moveText 4s infinite',
      },
      
    },
  },
  plugins: [],
};