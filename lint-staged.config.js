/**
 * Lint Staged issue reference:
 * https://github.com/okonet/lint-staged/issues/676
 */
const escape = require('shell-quote').quote;
const { ESLint } = require('eslint');

const eslint = new ESLint();
const isWin = process.platform === 'win32';

module.exports = {
  '**/*.{scss,css}': (filenames) => {
    const escapedFileNames = filenames
      .map((filename) => `"${isWin ? filename.replace(/\[|\]/g, '[$&]') : escape([filename])}"`)
      .join(' ');
    return [`stylelint --fix ${escapedFileNames}`, `git add ${escapedFileNames}`];
  },
  '**/*.{js,ts}': (filenames) => {
    const escapedFileNames = filenames
      // this will wrap all "[" "]" square brackets with another square brackets ([ => [[]) so [...customer].tsx will be processed to [[]...customer[]].tsx
      .map((filename) => `"${isWin ? filename.replace(/\[|\]/g, '[$&]') : escape([filename])}"`)
      .join(' ');
    return [
      `prettier --with-node-modules --ignore-path='./.gitignore' --write ${escapedFileNames}`,
      `eslint --no-ignore --max-warnings=0 --fix ${filenames
        .filter((file) => !eslint.isPathIgnored(file))
        .map((f) => `"${f}"`)
        .join(' ')}`,
      `git add ${escapedFileNames}`,
    ];
  },
  '**/*.{json,md,mdx,html,scss,css}': (filenames) => {
    const escapedFileNames = filenames
      .map((filename) => `"${isWin ? filename.replace(/\[|\]/g, '[$&]') : escape([filename])}"`)
      .join(' ');
    return [
      `prettier --with-node-modules --ignore-path='./.gitignore' --write ${escapedFileNames}`,
      `git add ${escapedFileNames}`,
    ];
  },
};
