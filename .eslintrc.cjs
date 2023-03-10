module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // React
    'react/display-name': 'off',
    // Suggestions
    'no-var': 'error',
    eqeqeq: 'warn',
    'prefer-const': 'warn',
    'no-inline-comments': 'warn',
    // Layout & Formatting
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1,
      },
    ],
    quotes: ['warn', 'single'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['config/*', 'babel.config.js'],
}
