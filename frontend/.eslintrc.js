module.exports = exports = {
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
    tsconfigRootDir: __dirsname,
    sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        '@typescript-eslint/no-unsafe-member-access': 1,
        '@typescript-eslint/no-unsafe-assignment': 1,
        '@typescript-eslint/no-unsafe-return': 1,
        '@typescript-eslint/no-unsafe-call': 1,
        '@typescript-eslint/restrict-template-expressions': 1,
        '@typescript-eslint/unbound-method': 'off',
    },
};
