// compress.js

import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { resolve } from 'path';

const inputFilePath = resolve('files', 'fileToCompress.txt');
const outputFilePath = resolve('files', 'archive.gz');

const readableStream = createReadStream(inputFilePath);
const gzipStream = createGzip();
const writableStream = createWriteStream(outputFilePath);

// Obsługa błędów
readableStream.on('error', (err) => console.error('Error reading file:', err));
gzipStream.on('error', (err) => console.error('Error compressing file:', err));
writableStream.on('error', (err) => console.error('Error writing file:', err));

// Piping: input -> gzip -> output
readableStream.pipe(gzipStream).pipe(writableStream);
