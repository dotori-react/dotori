import { theme, plugins } from './config';

import type { Config } from 'tailwindcss/types/config';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './packages/**/*.{js,ts,jsx,tsx}'],
  theme,
  plugins,
  darkMode: 'selector',
};

export default config;
