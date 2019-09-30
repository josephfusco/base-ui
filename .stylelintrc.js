module.exports = {
  extends: '@masonite/stylelint-config',
  plugins: [
    'stylelint-order',
    'stylelint-config-rational-order/plugin', // remove to keep only alpha sort
  ],
  rules: {
    'scss/dollar-variable-colon-space-after': 'at-least-one-space',
    'max-empty-lines': 2,
    'order/properties-order': [],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': false,
        'empty-line-between-groups': false,
      },
    ],
  },
};
