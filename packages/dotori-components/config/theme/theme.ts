import { Config } from 'tailwindcss';

import { defaultTheme } from './default';
import { extend } from './extend';

export const theme: Config['theme'] = {
  ...defaultTheme,
  extend,
};
