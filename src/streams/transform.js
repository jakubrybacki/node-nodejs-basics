// transform.js

import { Transform } from 'stream';

const reverseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const input = chunk.toString();
    const reversed = input.split('').reverse().join('');
    callback(null, reversed);
  }
});

// Przepinamy stdin -> transform -> stdout
process.stdin.pipe(reverseTransform).pipe(process.stdout);
