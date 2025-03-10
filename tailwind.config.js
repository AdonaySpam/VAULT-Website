/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'vault-gold': '#D4AF37',
        'vault-cream': '#FFF8E7',
        'vault-dark': '#2C2C2C',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      height: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};