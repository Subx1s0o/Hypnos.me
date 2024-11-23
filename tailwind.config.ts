import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        xl: '1280px',
        lg: '1024px',
        md: '768px',
        smd: '640px',
        sm: '480px'
      },
      fontFamily: {
        manrope: ['var(--font-manrope)', 'serif'],
        cormorant: ['var(--font-cormorant)', 'serif']
      },
      spacing: {
        'slide-small': '16px',
        'slide-large': '32px'
      },
      flex: {
        '1': '0 0 100%',
        '1/2': '0 0 50%',
        '1/4': '0 0 25%'
      },
      colors: {
        grey: {
          '200': '#E8E6E5',
          '300': '#393939',
          '400': '#4E453E',
          spanish: '#A69E97'
        },
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
        base: [
          '16px',
          {
            fontWeight: 500,
            lineHeight: '22px'
          }
        ],
        smd: [
          '16px',
          {
            fontWeight: 700,
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
  plugins: []
} satisfies Config
