module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'spaced-comment': 'error',
    'no-duplicate-imports': 'error',
  },
  // Ignore linting the following js,ts files
  ignorePatterns: ['.stylelintrc.js', 'lint-staged.config.js', 'src/vite-env.d.ts'],
};
