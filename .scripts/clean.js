#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const options = { recursive: true };
const folders = ['.serverless', '.webpack', '.webpackCache', '.build'];

try {
  folders.forEach((folder) => {
    fs.rmdirSync(path.resolve(__dirname, '..', folder), options);
  });

  console.log('Directories deleted successfully');
} catch (err) {
  console.error('Error occurred in deleting a directory', err);
}
