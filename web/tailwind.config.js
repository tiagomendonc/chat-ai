/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  plugins: [require('tailwindcss-animate'), require('tailwind-scrollbar')],
  theme: {
    extend: {
      height: {
        114: '114px',
      },
    },
  },
};
