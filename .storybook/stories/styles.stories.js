import path from 'path';
import { storiesOf } from '@storybook/html';
import { boolean } from '@storybook/addon-knobs';

// Import our main stylesheet.
import '../../src/scss/base-ui.scss';
import '../canvas.css';

// Dynamically get all .html files within html/.
const req = require.context('../../src/html/', true, /.html$/);

// Loop over files.
req.keys().forEach(fileName => {
  const file = req(fileName);
  const label = camelCaseToTitleCase(path.basename(fileName, '.html'));

  // Add story.
  storiesOf('Base UI').add(label, () => {
    const rootEl = document.documentElement;

    // Add knob to toggle "Dark Mode".
    const darkMode = boolean('Dark Mode', false);
    darkMode ? rootEl.setAttribute('data-theme', 'dark') : rootEl.setAttribute('data-theme', '');

    // Return the HTML for this file.
    return file;
  });
});

function camelCaseToTitleCase(string) {
  return (
    string
      // Insert a space before all caps.
      .replace(/([A-Z])/g, ' $1')
      // Uppercase the first character.
      .replace(/^./, str => str.toUpperCase())
  );
}
