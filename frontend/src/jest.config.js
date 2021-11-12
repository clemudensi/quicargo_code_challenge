module.exports = {
    roots: ['<rootDir>'],
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        '!**/node_modules/**',
        '!**/coverage/**',
        '!**/index.js',
        '!**/*.fixture.js',
        '!**/*.config.js',
        '!**/build/**',
        '!**/enums/**',
        '!**/models/**',
    ],
    "moduleDirectories": [
        "node_modules",
        "src"
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '\\.(css|scss|css?raw)$': 'identity-obj-proxy',
        '\\.(png|svg|pdf|jpg|jpeg)$': '<rootDir>/src/__mocks__/file-mock.js',
    },
    restoreMocks: true,
    setupFiles: ["<rootDir>/jest/env.js"],
    setupFilesAfterEnv: ['./src/setupTests.js'],
    testPathIgnorePatterns: ['./node_modules/'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.tsx?$': 'ts-jest',
    },
};
