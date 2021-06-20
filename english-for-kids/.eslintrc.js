module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'no-plusplus': 'off',
    'no-console': 'warn',
    'max-len': ['warn', { code: 120 }],
    'prettier/prettier': 'error',
    'import/extensions': 'off',
  },
};
