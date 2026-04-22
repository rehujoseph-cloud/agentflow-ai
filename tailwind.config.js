/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#080a14',
        bg2: '#0c0f1e',
        bg3: '#0f1225',
        surface: '#131729',
        surface2: '#181d35',
        purple: {
          DEFAULT: '#7c3aed',
          light: '#9b5cf6',
          pale: '#a78bfa',
        },
        cyan: {
          DEFAULT: '#22d3ee',
          dark: '#06b6d4',
        },
        green: {
          DEFAULT: '#10b981',
          light: '#34d399',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
