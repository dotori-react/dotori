import { Config } from 'tailwindcss';

const config: Config = {
  content: ['./packages/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  important: 'body',
};

export default config;
