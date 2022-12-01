import { access, constants, writeFile } from 'node:fs/promises';
import { fileURLToPath } from "url";
import path from "path";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
        const filePath = path.join(__dirname, "files", "fresh.txt");
        if (await isFileExist(filePath)) {
            throw new Error;
        }
        await writeFile(filePath, 'I am fresh and young');
    } catch {
        console.error('FS operation failed');
    }
};

await create();