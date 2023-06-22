/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#F6F4FF',
          200: '#CECAEB',
          300: '#C9C5E8',
          400: '#A39FC1',
          500: '#817CA5',
          550: '#87839F',
          600: '#8B85B1',
          700: '#413C5F',
        },
        accent: '#5845DD',
      },
    },
  },
  plugins: [],
}
