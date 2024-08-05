module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['dotori-base', 'dotori-react', 'dotori-typescript', 'dotori-import-sort'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: '.',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
  ignorePatterns: ['vite.config.ts', '**/*.html', '**/lib'],
  globals: {
    jest: true,
  },
};
