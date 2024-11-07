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
        cormorant: ['Cormorant Garamond', 'serif'],
        moniqa: ['Moniqa', 'serif']
      },
      colors: {
        grey: '#4E453E',
        black: '#1B1716',
        'light-grey': '#F3F1EF',
        cream: '#E5DCD4',
        primary: '#CCC0B180',
        brown: '#B99376'
      },
      fontSize: {
        xxl: [
          '104px',
          {
            fontWeight: 300,
            lineHeight: '126px'
          }
        ],
        xl: [
          '64px',
          {
            fontWeight: 500,
            lineHeight: '77px'
          }
        ],
        lg: [
          '56px',
          {
            fontWeight: 300,
            lineHeight: '68px'
          }
        ],
        md: [
          '40px',
          {
            fontWeight: 700,
            lineHeight: '48px'
          }
        ],
        'md-thin': [
          '40px',
          {
            fontWeight: 400,
            lineHeight: '48px'
          }
        ],
        smd: [
          '16px',
          {
            fontWeight: 700,
            lineHeight: '22px'
          }
        ],
        base: [
          '18px',
          {
            fontWeight: 500,
            lineHeight: '22px'
          }
        ],
        sm: [
          '14px',
          {
            fontWeight: 500,
            lineHeight: '21px'
          }
        ],
        xs: [
          '12px',
          {
            fontWeight: 500,
            lineHeight: '16px'
          }
        ]
      }
    }
  },
  plugins: [tailwindcssAnimate]
}
