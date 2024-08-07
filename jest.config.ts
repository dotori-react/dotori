import { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  collectCoverage: true,
  collectCoverageFrom: ['packages/**/*.{ts,tsx}', '!packages/**/*.d.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text', 'text-summary', 'lcov'],
  moduleNameMapper: {
    '^@dotori-components/(.*)$': '<rootDir>/packages/dotori-components/packages/$1',
    '^@dotori-context/(.*)$': '<rootDir>/packages/dotori-context/packages/$1',
    '^@dotori-utils/(.*)$': '<rootDir>/packages/dotori-utils/packages/$1',
    '^@dotori-icons/(.*)$': '<rootDir>/packages/dotori-icons/packages/$1',
    '^@dotori-hooks/(.*)$': '<rootDir>/packages/dotori-dotori-hooks/packages/$1',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['./jest.setup.js'],
};

export default jestConfig;
