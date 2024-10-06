// jest.config.js
module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"], // Add this line if you have setup tests
    moduleNameMapper: {
      "\\.(css|less|scss)$": "identity-obj-proxy",
    },
  };
  