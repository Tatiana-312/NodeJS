import { access, constants, writeFile } from 'node:fs/promises';

const isFileExist = async (filePath) => {
    try {
        await access(filePath, constants.F_OK);
        return true;
    } catch {
        return false;
    }
};

const create = async () => {
    try {
        if (await isFileExist('./files/fresh.txt')) {
            throw new Error;
        }
        await writeFile('./files/fresh.txt', 'I am fresh and young');
    } catch {
        console.error('FS operation failed');
    }
};

await create();