import { configure, addParameters, addDecorator } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import theme from './theme';

addDecorator(withA11y);
addDecorator(withKnobs);
addParameters({
  options: {
    theme,
  },
});
addParameters({
  backgrounds: [
    {
      name: 'gray',
      value: '#F3F3F3',
      default: true,
    },
    {
      name: 'white',
      value: '#FFFFFF',
    },
  ],
});

// automatically import all files ending in *.stories.js
configure(
  [
    require.context('./stories', true, /\.stories\.mdx$/),
    require.context('./stories', true, /\.stories\.js$/),
  ],
  module
);
