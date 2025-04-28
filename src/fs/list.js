import { promises as fs } from 'fs';
import { join } from 'path';

const list = async () => {
  const folderPath = join('files');

  try {
    // Sprawdź czy folder istnieje
    await fs.access(folderPath);

    // Odczytaj pliki w folderze
    const files = await fs.readdir(folderPath);

    // Wypisz tablicę nazw plików
    console.log(files);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await list();
