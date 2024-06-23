/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neo-black': '#04040c',
        'neo-white': '#f8f8ff',
      },
    },
  },
  plugins: [],
};
