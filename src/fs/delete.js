import { promises as fs } from 'fs';
import { join } from 'path';

const remove = async () => {
  const filePath = join('files', 'fileToRemove.txt');

  try {
    // Sprawdź czy plik istnieje
    await fs.access(filePath);

    // Usuń plik
    await fs.unlink(filePath);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await remove();
