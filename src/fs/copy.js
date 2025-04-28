import { promises as fs } from 'fs';
import { join } from 'path';

const copy = async () => {
  const srcFolder = 'files';
  const destFolder = 'files_copy';

  try {
    // Sprawdź czy folder źródłowy istnieje
    await fs.access(srcFolder);

    // Sprawdź czy folder docelowy NIE istnieje
    try {
      await fs.access(destFolder);
      // Jeśli istnieje, rzuć błąd
      throw new Error('FS operation failed');
    } catch (err) {
      if (err.code !== 'ENOENT') {
        throw new Error('FS operation failed');
      }
    }

    // Rekurencyjne kopiowanie
    await fs.cp(srcFolder, destFolder, { recursive: true });
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await copy();