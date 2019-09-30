import path from 'path';
import { storiesOf } from '@storybook/html';

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
  storiesOf('Base UI', module).add(label, () => {
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
