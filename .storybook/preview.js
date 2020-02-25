import { addParameters } from '@storybook/html';
import { themes } from '@storybook/theming';

// Import base-ui.scss into all stories.
import '!style-loader!css-loader!sass-loader!./../src/scss/base-ui.scss';
import '!style-loader!css-loader!sass-loader!./preview.scss';

const masoniteLogoLight =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2OCIgaGVpZ2h0PSI2NSI+ICAgIDxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgICAgICA8cGF0aCBkPSJNMTkuNjEyIDY0LjY5NFYyNy45NjJsOC42NjMgNS4wMzR2MzEuNjk4aC04LjY2MyIvPiAgICAgICAgPHBhdGggZD0iTTAgNjQuNTczVi0uMDU4bDQ3LjkyMiAyNy44NzZ2MzYuODc2aC04LjY2MVYzMi44OThMOC42NjQgMTUuMDg5djQ5LjQ5NkwwIDY0LjU3MyIvPiAgICAgICAgPHBhdGggZD0iTTU4Ljk5MiA2NC42OTRWMTQuOTkzTDQ3LjkxIDIxLjQyOWwtOC42MjUtNS4wMDlMNjcuNjQzLS4wMjJ2NjQuNzE2aC04LjY1MSIvPiAgICA8L2c+PC9zdmc+';
const masoniteLogoDark =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2OCIgaGVpZ2h0PSI2NSI+PGcgZmlsbD0iIzFBMTkxOSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTkuNjEyIDY0LjY5NFYyNy45NjJsOC42NjMgNS4wMzR2MzEuNjk4aC04LjY2MyIvPjxwYXRoIGQ9Ik0wIDY0LjU3M1YtLjA1OGw0Ny45MjIgMjcuODc2djM2Ljg3NmgtOC42NjFWMzIuODk4TDguNjY0IDE1LjA4OXY0OS40OTZMMCA2NC41NzMiLz48cGF0aCBkPSJNNTguOTkyIDY0LjY5NFYxNC45OTNMNDcuOTEgMjEuNDI5bC04LjYyNS01LjAwOUw2Ny42NDMtLjAyMnY2NC43MTZoLTguNjUxIi8+PC9nPjwvc3ZnPg==';

// storybook-dark-mode
addParameters({
  darkMode: {
    // Override the default dark theme.
    dark: {
      ...themes.dark,
      brandImage: masoniteLogoLight,
    },
    // Override the default light theme.
    light: {
      ...themes.light,
      brandImage: masoniteLogoDark,
    },
  },
});

// @storybook/addon-backgrounds
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
