import { readFile } from "node:fs/promises";
const { createHash } = await import("node:crypto");
import { getPath } from "../customModules/getPath.js";

const calculateHash = async () => {
  try {
    const hash = createHash("sha256");
    const filePath = getPath(import.meta.url, "files", "fileToCalculateHashFor.txt");
    const contentBuffer = await readFile(filePath);
    console.log(hash.update(contentBuffer).digest("hex"));
  } catch (err) {
    throw err;
  }
};

await calculateHash();
