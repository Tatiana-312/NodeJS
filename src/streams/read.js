import { createReadStream } from 'node:fs';
import { getPath } from '../customModules/getPath.js';

const read = async () => {
    try {
        const filePath = getPath(import.meta.url, 'files', 'fileToRead.txt');
        const stream = createReadStream(filePath, 'utf-8');
        stream.on('data', chunk => process.stdout.write(chunk));
    } catch (err) {
        throw err;
    }
};

await read();