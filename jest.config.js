const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  preset: 'ts-jest',
  // setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  coverageDirectory: '.coverage',
  coverageThreshold: {
    // The goal here is to have all above 80 and will be increasing this from time to time
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: ['node_modules/'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
};
