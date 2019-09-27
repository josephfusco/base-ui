import { configure, addParameters, addDecorator } from "@storybook/html";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import theme from "./theme";

addDecorator(withA11y);
addDecorator(withKnobs);
addParameters({
  options: {
    theme,
    showPanel: true,
    panelPosition: "right",
    sidebarAnimations: false
  }
});

// automatically import all files ending in *.stories.js
configure(
  [
    require.context("./stories", true, /\.stories\.mdx$/),
    require.context("./stories", true, /\.stories\.js$/)
  ],
  module
);
