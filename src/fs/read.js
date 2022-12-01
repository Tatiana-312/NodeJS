import { readFile } from "node:fs/promises";
import { getPath } from "./customModules/getPath.js";

const read = async () => {
    try {
        const filePath = getPath(import.meta.url, "files", "fileToRead.txt");
        const contents = await readFile(filePath, { encoding: 'utf8' });
        console.log(contents);
    } catch {
        throw new Error("FS operation failed");
    }
};

await read();