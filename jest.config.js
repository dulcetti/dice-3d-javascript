module.exports = {
  jest: {
    collectCoverageFrom: [
      "src/**/*.{js,jsx,ts,tsx}",
      "!<rootDir>/node_modules/",
    ],
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
    coverageReporters: ["text"],
    snapshotSerializers: ["my-serializer-module"],
  },
};
