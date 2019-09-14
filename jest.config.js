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
      statements: 50,
      functions: 50,
      branches: 50,
      lines: 50,
    },
  },
  coverageReporters: [
    'json',
    'html',
    'lcov',
  ],
}

module.exports = config
