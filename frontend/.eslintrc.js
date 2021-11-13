module.exports = {
    extends: [
        'react-app',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    env: {
        es6: true,
        jest: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    ignorePatterns: ["/*.*"],
    rules: {
        '@typescript-eslint/no-unsafe-member-access': 1,
        '@typescript-eslint/no-unsafe-assignment': 1,
    },
};