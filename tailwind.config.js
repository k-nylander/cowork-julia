/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'serif': ['Poppins', 'serif'],
      'mono': ['Poppins', 'monospace'],
    },
    screens: {
      sm: '769px',
      md: '1026px',
      lg: '1282px',
      xl: '1442px',
    },
    extend: {
      colors: {
        primary: {
          500: '#223D3C',
          400: '#456160',
          300: '#6A8786',
          200: '#92B0AE',
          100: '#BBDAD8',
        },
        neutral: {
          500: '#000000',
          400: '#9a4c2e',
          300: '#AFD66F',
          200: 'F9F871',
          100: '#F8F3F2',
        },
        page: '#f8f3f2',
      }
    },
    plugins: [],
  }
}