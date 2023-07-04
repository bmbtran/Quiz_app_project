// module.exports = {
//     testEnvironment: 'jsdom',
//     setupFilesAfterEnv: ['./__tests__/setupTests.jsx'],
//   };
module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['./__tests__/setupTests.js'],
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest'
    }
  };