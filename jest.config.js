const config = {
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/jest/setup.js',
  ],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      statements: 100,
      functions: 100,
      branches: 100,
      lines: 100,
    },
  },
  coverageReporters: [
    'json',
    'html',
    'lcov',
  ],
}

module.exports = config
