// Lib
import type { Config } from '@jest/types';

const jestConfig: Config.InitialOptionsWithRootDir = {
  rootDir: __dirname,

  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.test.json',
    },
  },

  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,ts}',
    '<rootDir>/src/schemas',
    '!**/*.d.ts',
  ],
  coverageDirectory: '<rootDir>/test_results/coverage',
  coverageReporters: [
    'json-summary',
    'lcov',
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  preset: 'ts-jest',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '<rootDir>/test_results',
        outputName: './report.junit.xml',
      },
    ],
  ],
  roots: [
    '<rootDir>/src/',
    '<rootDir>/test/',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/test/index.ts',
  ],
  testEnvironment: 'node',
  testMatch: [
    '**/*.spec.ts',
  ],
  verbose: true,
};

export default jestConfig;
