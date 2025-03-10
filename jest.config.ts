import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  transform: {
    '\\.css\\.ts$': '@vanilla-extract/jest-transform',
  },
};

export default createJestConfig(config);
