module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testEnvironment: 'jsdom',
  // transformIgnorePatterns: ["<rootDir>/node_modules/"],
  rootDir: '.',
  testMatch: ['<rootDir>/tests/**/*.spec.(js|jsx|ts|tsx)'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue', 'ts', 'tsx'],
  // transform: {
  //   "^.+\\.js$": "babel-jest",
  // },
  transform: {
    '^.+\\.(js|ts)$': 'ts-jest'
  },
  transformIgnorePatterns: []
}
