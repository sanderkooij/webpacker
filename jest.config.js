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
      statements: 85,
      functions: 85,
      branches: 85,
      lines: 85,
    },
  },
  coverageReporters: [
    'json',
    'html',
    'lcov',
  ],
}

module.exports = config
