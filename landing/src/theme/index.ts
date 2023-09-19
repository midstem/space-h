import { DefaultTheme } from 'styled-components'

export const Spaces = {
  1: '0.313rem', // 5px
  2: '0.625rem', // 10px
  3: '0.938rem', // 15px
  4: '1.25rem', // 20px
  5: '1.563rem', // 25px
  6: '1.875rem', // 30px
  7: '2.188rem', // 35px
  8: '2.5rem', // 40px
  20: '6.25rem', // 100px
}

export const BreakPoints = {
  xs: '30em', // 480px
  sm: '38.125em', // 610px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '80em', // 1280px
  '2xl': '96em', // 1536px
}

export const FontSizes = {
  1: '0.625rem', // 10px
  2: '0.75rem', // 12px
  3: '0.875rem', // 14px
  4: '1rem', // 16px
  5: '1.125rem', // 18px
  6: '1.25rem', // 20px
  8: '1.5rem', // 24px
  11: '1.875rem', // 30px
  14: '2.25rem', // 36px
  20: '3rem', // 48 px
  26: '3.75rem', // 60px
  32: '4.5rem', // 72 px
  41: '5.625rem', // 90 px
}

export const Colors = {
  black: {
    1000: '#000000',
  },
  white: {
    400: 'rgba(255, 255, 255, 0.4)',
    1000: '#ffffff',
  },
  orange: {
    600: '#f3a42d',
  },
}

const theme: DefaultTheme = {
  breakpoints: BreakPoints,
  fontSizes: FontSizes,
  spaces: Spaces,
  colors: Colors,
}

export default theme
