/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class', // enables dark mode using a class on <html>
    theme: {
      extend: {
        colors: {
          'nature-light': '#f0fdf4', // light background shade
          'nature': '#4caf50',       // primary green
          'nature-dark': '#1f3b2d',    // dark background for dark mode
        },
        animation: {
          'fade-in': 'fadeIn 0.8s ease-out',
          'slide-up': 'slideUp 0.5s ease-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0, transform: 'translateY(10px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
          slideUp: {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  