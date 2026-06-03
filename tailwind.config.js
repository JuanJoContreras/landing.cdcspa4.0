/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#EEF4FF',
          100: '#D9E8FF',
          500: '#1A4B8C',
          600: '#1340780',
          700: '#0D2F5E',
          900: '#071A38',
        },
        accent: '#2ECC71',
        gold:   '#F5A623',
        dark:   '#1A1A2E',
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
