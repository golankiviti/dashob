module.exports = {
    preset: 'jest-puppeteer',
    rootDir: 'src',
    setupFilesAfterEnv: [
        '<rootDir>/setupTests.js',
        'jest-enzyme',
    ],
    transform: {
        '^.+\\.(js|jsx)?$': 'babel-jest'
      },
    transformIgnorePatterns: ['/node_modules','node_modules/']
}