module.exports = exports = {
    extends: ['react-app'],
    overrides: [
        {
            plugins: ['@typescript-eslint'],
            files: ['**/*.ts?(x)'],
            parser: '@typescript-eslint/parser',
            env: {
                es6: true,
                jest: true,
            },
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                project: './tsconfig.json',
                ecmaFeatures: {
                    jsx: true,
                },
            },
            rules: {
                '@typescript-eslint/no-unsafe-member-access': 1,
                '@typescript-eslint/no-unsafe-assignment': 1,
            },
        },
    ],
};
