// write.js

import { createWriteStream } from 'fs';
import { resolve } from 'path';

const filePath = resolve('files', 'fileToWrite.txt'); // zakładam, że do folderu 'files'

const writableStream = createWriteStream(filePath);

// Obsługa błędów
writableStream.on('error', (err) => {
  console.error('Error writing to file:', err);
});

// Przekierowanie danych ze stdin do pliku
process.stdin.pipe(writableStream);
