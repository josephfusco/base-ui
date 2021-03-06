const path = require('path');

module.exports = {
  stories: ['../docs/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-backgrounds',
    '@storybook/addon-actions',
    'storybook-dark-mode',
  ],
};
