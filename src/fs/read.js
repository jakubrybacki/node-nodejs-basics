import { promises as fs } from 'fs';
import { join } from 'path';

const read = async () => {
  const filePath = join('files', 'fileToRead.txt');

  try {
    // Sprawdź, czy plik istnieje
    await fs.access(filePath);

    // Odczytaj zawartość pliku
    const content = await fs.readFile(filePath, 'utf-8');

    // Wypisz zawartość w konsoli
    console.log(content);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await read();
