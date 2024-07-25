/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      fontFamily:{
        // Fonte Canva: Telegraph
      },
      screens: {
        sm: '640px',
        md: '769px',
        lg: '1026px',
        xl: '1282px',
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
            400: '#72B16E',
            300: '#AFD66F',
            200: 'F9F871',
            100: '#F8F3F2',
          },
          page: '#F8F3F2',
        }
      },
    plugins: [],
  }
}