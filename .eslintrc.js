module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    parser: 'babel-eslint',
    extends: ['plugin:react/recommended', 'airbnb'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'react/prefer-stateless-function': 0,
        singleQuote: true,
        quotes: ['error', 'backtick', { else: 'single' }],
        'comma-dangle': [
            'error',
            {
                arrays: 'never',
                objects: 'never',
                imports: 'never',
                exports: 'never',
                functions: 'never',
            },
        ],
        'arrow-parens': true,
    },
};
