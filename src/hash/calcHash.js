// calcHash.js

import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { resolve } from 'path';

const filePath = resolve('files', 'fileToCalculateHashFor.txt');

// Tworzymy obiekt hash
const hash = createHash('sha256');

// Tworzymy strumień pliku
const fileStream = createReadStream(filePath);

// Obsługa błędów
fileStream.on('error', (err) => {
  console.error('Error reading file:', err);
});

hash.on('error', (err) => {
  console.error('Error hashing file:', err);
});

// Hashujemy plik i wypisujemy wynik
fileStream.pipe(hash).setEncoding('hex').on('data', (hashedData) => {
  console.log(hashedData);
});
