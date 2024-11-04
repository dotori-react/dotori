import { ThemeConfig } from 'tailwindcss/types/config';

export const extend: Partial<ThemeConfig> = {
  borderRadius: {
    inherit: 'inherit',
  },
  width: {
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
  },
  maxWidth: {
    layout: '1040px',
  },
  height: {
    inherit: 'inherit',
    header: '5rem',
  },
  fontSize: {
    '4xs': '0.5rem',
    '3xs': '0.625rem',
    '2xs': '0.75rem',
    xs: '0.875rem',
    sm: '1rem',
    md: '1.125rem',
    lg: '1.25rem',
    xl: '1.375rem',
    '2xl': '1.75rem',
    '3xl': '1.875rem',
    '4xl': '2rem',
  },
  fontWeight: {
    bold: '700',
    semiBold: '600',
    regular: '400',
    light: '300',
  },
  fontFamily: {
    sans: ['GmarketSans', 'sans-serif'],
  },
  screens: {
    galaxy_fold_one: '280px',
    vertical_mobile: '375px',
    horizontal_mobile: '576px',
    tablet: '768px',
    laptop: '992px',
    large_laptop: '1200px',
  },
  backgroundImage: {
    'darkMode-light-background': "url('../../packages/assets/dark-mode-switch/light.png')",
    'darkMode-sun': "url('../../packages/assets/dark-mode-switch/sun.svg')",
    'darkMode-night-background': "url('../../packages/assets/dark-mode-switch/night.png')",
    'darkMode-moon': "url('../../packages/assets/dark-mode-switch/moon.svg')",
  },
  borderWidth: {
    6: '6px',
  },
  zIndex: {
    float: '2',
    'background-down': '90',
    background: '100',
    'background-up': '110',
  },
};
