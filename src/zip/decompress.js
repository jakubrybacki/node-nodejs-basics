// decompress.js

import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { resolve } from 'path';

const inputFilePath = resolve('files', 'archive.gz');
const outputFilePath = resolve('files', 'fileToCompress.txt');

const readableStream = createReadStream(inputFilePath);
const gunzipStream = createGunzip();
const writableStream = createWriteStream(outputFilePath);

// Obsługa błędów
readableStream.on('error', (err) => console.error('Error reading archive:', err));
gunzipStream.on('error', (err) => console.error('Error decompressing file:', err));
writableStream.on('error', (err) => console.error('Error writing file:', err));

// Łączenie strumieni: archive.gz -> gunzip -> fileToCompress.txt
readableStream.pipe(gunzipStream).pipe(writableStream);
