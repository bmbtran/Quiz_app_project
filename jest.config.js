// module.exports = {
//     testEnvironment: 'jsdom',
//     setupFilesAfterEnv: ['./__tests__/setupTests.jsx'],
//   };
module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['./setupTests.jsx'],
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest'
    }
  };