import tailwindcssAnimate from 'tailwindcss-animate'

export default {
  mode: 'jit',
  darkMode: ['class'],
  content: ['./src/components/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        xl: '1280px',
        lg: '1024px',
        md: '768px',
        sm: '480px'
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif']
      },
      colors: {
        grey: '#4E453E',
        black: '#1B1716',
        'light-grey': '#F3F1EF',
        cream: '#E5DCD4'
      }
    }
  },
  plugins: [tailwindcssAnimate]
}
