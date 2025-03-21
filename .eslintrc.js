// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['dotori-base', 'dotori-react', 'dotori-typescript', 'dotori-import-sort', 'plugin:storybook/recommended'],
  rules: {
    'no-void': 'off',
  },
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['**/*.html', '**/lib', '**/node_modules', '**/build', './.eslintrc.js', './changelog.config.js'],
  parserOptions: {
    project: [
      path.resolve(__dirname, './tsconfig.json'),
      path.resolve(__dirname, './packages/dotori-utils/tsconfig.json'),
      path.resolve(__dirname, './packages/dotori-context/tsconfig.json'), // 추가된 경로
      path.resolve(__dirname, './packages/dotori-hooks/tsconfig.json'), // 추가된 경로
      path.resolve(__dirname, './packages/dotori-icons/tsconfig.json'), // 추가된 경로
      path.resolve(__dirname, './packages/dotori-components/tsconfig.json'), // 추가된 경로
      path.resolve(__dirname, './docs/tsconfig.json'), // 추가된 경로
      path.resolve(__dirname, './dev/tsconfig.json'), // 추가된 경로
    ],
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: [
          path.resolve(__dirname, './tsconfig.json'),
          path.resolve(__dirname, './packages/dotori-utils/tsconfig.json'),
          path.resolve(__dirname, './packages/dotori-context/tsconfig.json'), // 추가된 경로
          path.resolve(__dirname, './packages/dotori-hooks/tsconfig.json'), // 추가된 경로
          path.resolve(__dirname, './packages/dotori-icons/tsconfig.json'), // 추가된 경로
          path.resolve(__dirname, './packages/dotori-components/tsconfig.json'), // 추가된 경로
          path.resolve(__dirname, './docs/tsconfig.json'), // 추가된 경로
          path.resolve(__dirname, './dev/tsconfig.json'), // 추가된 경로
        ],
      },
    },
  },
  overrides: [
    {
      files: ['./docs/scripts', './docs/*.ts', './docs/src'],
      rules: {
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': 0,
      },
    },
  ],
};
