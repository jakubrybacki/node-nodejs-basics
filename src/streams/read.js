// read.js

import { createReadStream } from 'fs';
import { resolve } from 'path';

const filePath = resolve('files', 'fileToRead.txt'); // zakładam że plik też w 'files'

const readableStream = createReadStream(filePath, { encoding: 'utf-8' });

// Obsługa błędów
readableStream.on('error', (err) => {
  console.error('Error reading file:', err);
});

// Wypisywanie zawartości pliku do stdout
readableStream.pipe(process.stdout);
