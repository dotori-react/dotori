import plugin from 'tailwindcss/plugin';

import type { PluginAPI, Config } from 'tailwindcss/types/config';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './packages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
      deviceSizes: {
        galaxy_fold_one: 280,
        vertical_mobile: 375,
        horizontal_mobile: 576,
        tablet: 768,
        laptop: 992,
        large_laptop: 1200,
      },
      backgroundImage: {
        'darkMode-light-background': "url('/packages/assets/dark-mode-switch/light.png')",
        'darkMode-sun': "url('/packages/assets/dark-mode-switch/sun.svg')",
        'darkMode-night-background': "url('/packages/assets/dark-mode-switch/night.png')",
        'darkMode-moon': "url('/packages/assets/dark-mode-switch/moon.svg')",
      },
      borderWidth: {
        6: '6px',
      },
    },
    colors: {
      dimmed: 'rgba(0, 0, 0, 0.2)',
      inherit: 'inherit',
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      gray: {
        0: '#f8f9fa',
        100: '#f1f3f5',
        200: '#e9ecef',
        300: '#dee2e6',
        400: '#ced4da',
        500: '#adb5bd',
        600: '#868e96',
        700: '#495057',
        800: '#343a40',
        900: '#212529',
      },
      red: {
        0: '#fff5f5',
        100: '#ffe3e3',
        200: '#ffc9c9',
        300: '#ffa8a8',
        400: '#ff8787',
        500: '#ff6b6b',
        600: '#fa5252',
        700: '#f03e3e',
        800: '#c92a2a',
        900: '#c92a2a',
      },
      pink: {
        0: '#fff0f6',
        100: '#ffdeeb',
        200: '#fcc2d7',
        300: '#faa2c1',
        400: '#f783ac',
        500: '#f06595',
        600: '#e64980',
        700: '#d6336c',
        800: '#c2255c',
        900: '#a61e4d',
      },
      grape: {
        0: '#f8f0fc',
        100: '#f3d9fa',
        200: '#eebefa',
        300: '#e599f7',
        400: '#da77f2',
        500: '#cc5de8',
        600: '#be4bdb',
        700: '#ae3ec9',
        800: '#9c36b5',
        900: '#862e9c',
      },
      violet: {
        0: '#f3f0ff',
        100: '#e5dbff',
        200: '#d0bfff',
        300: '#b197fc',
        400: '#9775fa',
        500: '#845ef7',
        600: '#7950f2',
        700: '#7048e8',
        800: '#6741d9',
        900: '#5f3dc4',
      },
      indigo: {
        0: '#edf2ff',
        100: '#dbe4ff',
        200: '#bac8ff',
        300: '#91a7ff',
        400: '#748ffc',
        500: '#5c7cfa',
        600: '#4c6ef5',
        700: '#4263eb',
        800: '#3b5bdb',
        900: '#364fc7',
      },
      blue: {
        0: '#e7f5ff',
        100: '#d0ebff',
        200: '#a5d8ff',
        300: '#74c0fc',
        400: '#4dabf7',
        500: '#339af0',
        600: '#228be6',
        700: '#1c7ed6',
        800: '#1971c2',
        900: '#1864ab',
      },
      cyan: {
        0: '#e3fafc',
        100: '#c5f6fa',
        200: '#99e9f2',
        300: '#66d9e8',
        400: '#3bc9db',
        500: '#22b8cf',
        600: '#15aabf',
        700: '#1098ad',
        800: '#0c8599',
        900: '#0b7285',
      },
      teal: {
        0: '#e6fcf5',
        100: '#c3fae8',
        200: '#96f2d7',
        300: '#63e6be',
        400: '#38d9a9',
        500: '#20c997',
        600: '#12b886',
        700: '#0ca678',
        800: '#099268',
        900: '#087f5b',
      },
      green: {
        0: '#ebfbee',
        100: '#d3f9d8',
        200: '#b2f2bb',
        300: '#8ce99a',
        400: '#69db7c',
        500: '#51cf66',
        600: '#40c057',
        700: '#37b24d',
        800: '#2f9e44',
        900: '#2b8a3e',
      },
      lime: {
        0: '#f4fce3',
        100: '#e9fac8',
        200: '#d8f5a2',
        300: '#c0eb75',
        400: '#a9e34b',
        500: '#94d82d',
        600: '#82c91e',
        700: '#74b816',
        800: '#66a80f',
        900: '#5c940d',
      },
      yellow: {
        0: '#fff9db',
        100: '#fff3bf',
        200: '#ffec99',
        300: '#ffe066',
        400: '#ffd43b',
        500: '#fcc419',
        600: '#fab005',
        700: '#f59f00',
        800: '#f08c00',
        900: '#e67700',
      },
      orange: {
        0: '#fff4e6',
        100: '#ffe8cc',
        200: '#ffd8a8',
        300: '#ffc078',
        400: '#ffa94d',
        500: '#ff922b',
        600: '#fd7e14',
        700: '#f76707',
        800: '#e8590c',
        900: '#d9480f',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }: { addUtilities: PluginAPI['addUtilities'] }) =>
      addUtilities({
        '.typo-3xs400': {
          '@apply text-3xs font-regular': {},
        },

        '.typo-3xs600': {
          '@apply text-3xs font-semiBold': {},
        },

        '.typo-2xs300': {
          '@apply text-2xs font-light': {},
        },

        '.typo-2xs400': {
          '@apply text-2xs font-regular': {},
        },

        '.typo-2xs600': {
          '@apply text-2xs font-semiBold': {},
        },

        '.typo-2xs700': {
          '@apply text-2xs font-bold': {},
        },

        '.typo-xs300': {
          '@apply text-xs font-light': {},
        },

        '.typo-xs400': {
          '@apply text-xs font-regular': {},
        },

        '.typo-xs600': {
          '@apply text-xs font-semiBold': {},
        },

        '.typo-xs700': {
          '@apply text-xs font-bold': {},
        },

        '.typo-sm300': {
          '@apply text-sm font-light': {},
        },

        '.typo-sm400': {
          '@apply text-sm font-regular': {},
        },

        '.typo-sm600': {
          '@apply text-sm font-semiBold': {},
        },

        '.typo-sm700': {
          '@apply text-sm font-bold': {},
        },

        '.typo-md300': {
          '@apply text-md font-light': {},
        },

        '.typo-md400': {
          '@apply text-md font-regular': {},
        },

        '.typo-md600': {
          '@apply text-md font-semiBold': {},
        },

        '.typo-md700': {
          '@apply text-md font-bold': {},
        },

        '.typo-lg400': {
          '@apply text-lg font-regular': {},
        },

        '.typo-lg600': {
          '@apply text-lg font-semiBold': {},
        },

        '.typo-lg700': {
          '@apply text-lg font-bold': {},
        },

        '.typo-xl400': {
          '@apply text-xl font-regular': {},
        },

        '.typo-xl600': {
          '@apply text-xl font-semiBold': {},
        },

        '.typo-xl700': {
          '@apply text-xl font-bold': {},
        },

        '.typo-2xl400': {
          '@apply text-2xl font-regular': {},
        },

        '.typo-2xl600': {
          '@apply text-2xl font-semiBold': {},
        },

        '.typo-2xl700': {
          '@apply text-2xl font-bold': {},
        },

        '.typo-3xl400': {
          '@apply text-3xl font-regular': {},
        },

        '.typo-3xl600': {
          '@apply text-3xl font-semiBold': {},
        },

        '.typo-3xl700': {
          '@apply text-3xl font-bold': {},
        },

        '.clip-rect-zero': {
          clip: 'rect(0, 0, 0, 0)',
        },

        '.clip-path-none': {
          'clip-path': 'polygon(0 0, 0 0, 0 0)',
        },
        '.scroll-hidden': {
          '&::-webkit-scrollbar': {
            width: '0px',
          },
        },
      }),
    ),
  ],
  darkMode: 'selector',
  important: 'body',
};

export default config;
