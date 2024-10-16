import { Config } from 'tailwindcss';
import { isolateInsideOfContainer, scopedPreflightStyles } from 'tailwindcss-scoped-preflight';

const config: Config = {
  content: ['./packages/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    scopedPreflightStyles({
      isolationStrategy: isolateInsideOfContainer('.tw-preflight'),
    }),
  ],
  important: '.tw-preflight',
};

export default config;
