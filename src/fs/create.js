import { promises as fs } from 'fs';
import { join } from 'path';

const create = async () => {
    const filePath = join('files', 'fresh.txt');
  
    try {
      // Check if file already exists
      await fs.access(filePath);
      // If access succeeds, file exists -> throw error
      throw new Error('FS operation failed');
    } catch (err) {
      if (err.code === 'ENOENT') {
        // File does not exist -> create it
        await fs.writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
      } else {
        // Any other error (including our manual throw)
        throw new Error('FS operation failed');
      }
    }
  };

await create();