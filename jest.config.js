module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|sass|scss|less)$': '<rootDir>/__mocks__/styleMock.js'
  },
  modulePaths: ['src'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    '**/src/**/*.{ts,tsx}',
    '!**/node_modules/**'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: "node",
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.vscode'
  ]
};