import { addParameters } from '@storybook/html';

// Import base-ui.scss into all stories.
import '!style-loader!css-loader!sass-loader!./../src/scss/base-ui.scss';
import '!style-loader!css-loader!sass-loader!./preview.scss';

addParameters({
  backgrounds: [
    { name: 'twitter', value: '#00aced', default: true },
    { name: 'facebook', value: '#3b5998' },
  ],
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
