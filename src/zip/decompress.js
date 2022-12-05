import { createReadStream } from "node:fs";
import { createWriteStream } from "node:fs";
import { createUnzip } from "node:zlib";
import { getPath } from "../customModules/getPath.js";

const decompress = async () => {
    try {
        const filePath = getPath(import.meta.url, "files", "archive.gz");
        const deCompressedFilePath = getPath(import.meta.url, "files", "fileToCompress.txt");
        const readStream = createReadStream(filePath);
        const zlib = createUnzip();
        const writeStream = createWriteStream(deCompressedFilePath);
        readStream.pipe(zlib).pipe(writeStream);
      } catch (err) {
        throw err;
      }
};

await decompress();