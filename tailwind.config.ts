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
      }
    }
  },
  plugins: [tailwindcssAnimate]
}
