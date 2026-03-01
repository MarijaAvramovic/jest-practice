import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.browser,
        ...globals.node
      },
      ecmaVersion: 2022,
      sourceType: 'module'
    },
    rules: {
      'eqeqeq': 'error',
      'comma-dangle': ['error', 'never'],
      'consistent-return': 'error',
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'no-console': 'warn'
    }
  },
  {
    ignores: ['dist/**', 'node_modules/**', 'webpack.*.js']
  }
];

 