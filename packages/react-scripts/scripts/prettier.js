'use strict';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

const spawn = require('react-dev-utils/crossSpawn');

const filesToPrettify = process.argv.slice(2);

const prettierProcess = spawn.sync(
  'prettier',
  [
    '--trailing-comma',
    'all',
    '--single-quote',
    '--print-width',
    '100',
    '--write',
    '--',
    ...filesToPrettify,
  ],
  {
    stdio: 'inherit',
  }
);

if (prettierProcess.status !== 0) {
  console.error('prettier, Failed');
  return;
}

const gitAddProcess = spawn.sync('git', ['add'], { stdio: 'inherit' });

if (gitAddProcess.status !== 0) {
  console.error('git add, Failed');
  return;
}
