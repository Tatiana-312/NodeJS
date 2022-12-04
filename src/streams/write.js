import { createWriteStream } from 'node:fs';
import { getPath } from '../customModules/getPath.js';

const write = async () => {
    try {
        const filePath = getPath(import.meta.url, 'files', 'fileToWrite.txt');
        const writeStream = createWriteStream(filePath);
        process.stdin.on('data', chunk => {
            writeStream.write(chunk);
        })
    } catch (err) {
        throw err;
    }
};

await write();