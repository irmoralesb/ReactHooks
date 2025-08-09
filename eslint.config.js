const next = require('eslint-plugin-next');
const reactHooks = require('eslint-plugin-react-hooks');

module.exports = [
    next.configs['core-web-vitals'],
    {
        plugins: {
            'react-hooks': reactHooks,
        },
        rules: {
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
        },
    },
];