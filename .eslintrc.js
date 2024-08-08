// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['dotori-base', 'dotori-react', 'dotori-typescript', 'dotori-import-sort'],
  rules: {
    'no-void': 'off',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [
      path.resolve(__dirname, './tsconfig.json'),
      path.resolve(__dirname, './packages/dotori-utils/tsconfig.json'),
      path.resolve(__dirname, './packages/dotori-context/tsconfig.json'), // 추가된 경로
      path.resolve(__dirname, './packages/dotori-hooks/tsconfig.json'), // 추가된 경로
      path.resolve(__dirname, './packages/dotori-icons/tsconfig.json'), // 추가된 경로
      path.resolve(__dirname, './packages/dotori-components/tsconfig.json'), // 추가된 경로
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
        ],
      },
    },
  },
  ignorePatterns: ['**/*.html', '**/lib'],
};
