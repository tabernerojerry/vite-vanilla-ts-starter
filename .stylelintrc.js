module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  rules: {
    'block-no-empty': true,
    'color-no-invalid-hex': true,
    'comment-no-empty': true,
    'declaration-empty-line-before': 'never',
    'no-empty-source': null,
    'selector-pseudo-element-no-unknown': null,
  },
};
