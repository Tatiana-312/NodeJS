import { createReadStream } from "node:fs";
import { createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";
import { getPath } from "../customModules/getPath.js";

const compress = async () => {
  try {
    const filePath = getPath(import.meta.url, "files", "fileToCompress.txt");
    const compressedFilePath = getPath(import.meta.url, "files", "archive.gz");
    const readStream = createReadStream(filePath);
    const zlib = createGzip();
    const writeStream = createWriteStream(compressedFilePath);
    readStream.pipe(zlib).pipe(writeStream);
  } catch (err) {
    throw err;
  }
};

await compress();
