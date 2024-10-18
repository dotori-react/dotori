import plugin from 'tailwindcss/plugin';
import { isolateInsideOfContainer, scopedPreflightStyles } from 'tailwindcss-scoped-preflight';

import type { PluginAPI, Config } from 'tailwindcss/types/config';

export const plugins: Config['plugins'] = [
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
  scopedPreflightStyles({
    isolationStrategy: isolateInsideOfContainer('.tw-preflight'),
  }),
];
