module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/prettier',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['*.mjs', '*.config.*', 'use*/', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'prettier', 'react', 'import'],
  rules: {
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'warn',
    '@typescript-eslint/no-shadow': 'off',
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/react-in-jsx-scope': 'off',
    'import/newline-after-import': 'error',
    'newline-before-return': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'prefer-destructuring': ['error', { array: true, object: true }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'always', prev: 'export', next: '*' },
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'always', prev: 'if', next: '*' },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'desc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: 'src/*',
            group: 'internal',
          },
          {
            pattern: 'src/*/*',
            group: 'parent',
          },
          {
            pattern: 'src/*/*/*',
            group: 'sibling',
          },
          {
            pattern: 'src/*/*/**',
            group: 'index',
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      excludedFiles: ['use*.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true,
          },
        ],
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
}
