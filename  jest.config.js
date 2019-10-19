module.exports = {
    collectCoverageFrom: [
      'src/**/*.js',
    ],
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: ['/node_modules/'],
    coverageReporters: ['html'],
    coverageThreshold: {
      global: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80
      }
    },
    transform: {
      '^.+\\.(css|scss)$': '<rootDir>/src/mocks/styles-mock.js',
      '^.+\\.js$': 'babel-jest'
    },
    setupFilesAfterEnv: [
      '<rootDir>/src/setupTests.js'
    ]
  }