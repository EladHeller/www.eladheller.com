import nextPlugin from 'eslint-config-next';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

const eslintConfig = [
  js.configs.recommended,
  ...nextPlugin,
  // TypeScript type-checked rules only for TS/TSX files
  ...tseslint.configs.recommendedTypeChecked.map(config => ({
    ...config,
    files: ['**/*.ts', '**/*.tsx'],
  })),
  ...tseslint.configs.stylisticTypeChecked.map(config => ({
    ...config,
    files: ['**/*.ts', '**/*.tsx'],
  })),
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // TypeScript-specific rules that require type information
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/explicit-function-return-type': 'off', // Too strict for React
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
    },
  },
  // General rules for all files
  {
    languageOptions: {
      globals: {
        React: 'readonly',
        JSX: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      // Variables
      'no-unused-vars': 'off', // Use TypeScript version
      '@typescript-eslint/no-unused-vars': ['error'],

      // Best Practices (Airbnb-inspired)
      'eqeqeq': ['error', 'always', { 'null': 'ignore' }],
      'no-alert': 'error',
      'no-console': ['error', { 'allow': ['warn', 'error'] }],
      'no-debugger': 'error',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-return-await': 'error',
      'no-throw-literal': 'error',
      'no-useless-concat': 'error',
      'prefer-promise-reject-errors': 'error',
      'require-await': 'error',

      // ES6+
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-template': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'object-shorthand': ['error', 'always'],
      'arrow-body-style': ['error', 'as-needed'],

      // Spacing and Formatting
      'no-multi-spaces': 'error',
      'no-trailing-spaces': 'error',
      'space-before-blocks': 'error',
      'space-infix-ops': 'error',
      'comma-spacing': ['error', { 'before': false, 'after': true }],
      'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
      'keyword-spacing': ['error', { 'before': true, 'after': true }],
      'semi-spacing': ['error', { 'before': false, 'after': true }],
      'space-in-parens': ['error', 'never'],
      'array-bracket-spacing': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'semi': ['error', 'always'],
      'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],

      // Complexity
      'complexity': ['warn', 15],
      'max-depth': ['warn', 4],
      'max-lines-per-function': ['warn', { 'max': 150, 'skipBlankLines': true, 'skipComments': true }],
    },
  },
];

export default eslintConfig;
