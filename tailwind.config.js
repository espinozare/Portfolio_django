module.exports = {
  darkMode: 'class',
  content: [
    './portfolio_re/templates/**/*.html',
    './portfolio_re/static/src/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
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
        float: 'float 3s ease-in-out infinite',
        pulseScale: 'pulseScale 2s ease-in-out infinite',
        textGlow: 'textGlow 2s ease-in-out infinite alternate',
        fadeIn: 'fadeIn 0.8s ease-out forwards'
      },
      keyframes: {
        moveText: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        },
        pulseScale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        },
        textGlow: {
          '0%': { textShadow: '0 0 5px rgba(255, 255, 255, 0.5)' },
          '100%': { textShadow: '0 0 15px rgba(255, 255, 255, 0.9)' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      boxShadow: {
        'sky-glow': '0 0 15px rgba(14, 165, 233, 0.5)'
      }
    },
  },
  plugins: [],
};