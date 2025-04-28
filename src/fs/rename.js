import { promises as fs } from 'fs';
import { join } from 'path';

const rename = async () => {
  const oldPath = join('files', 'wrongFilename.txt');
  const newPath = join('files', 'properFilename.md');

  try {
    // Sprawdź czy istnieje plik do zmiany nazwy
    await fs.access(oldPath);

    // Sprawdź czy plik docelowy już istnieje
    try {
      await fs.access(newPath);
      // Jeśli istnieje properFilename.md, rzucamy błąd
      throw new Error('FS operation failed');
    } catch (err) {
      if (err.code !== 'ENOENT') {
        throw new Error('FS operation failed');
      }
    }

    // Zmień nazwę pliku
    await fs.rename(oldPath, newPath);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await rename();
