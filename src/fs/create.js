import { access, constants, writeFile } from "node:fs/promises";
import { fileURLToPath } from "url";
import path from "path";
import { dirname } from "path";
import { isExist } from "./customModules/exist.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  try {
    const filePath = path.join(__dirname, "files", "fresh.txt");
    if (await isExist(filePath)) {
      throw new Error("FS operation failed");
    }
    await writeFile(filePath, "I am fresh and young");
  } catch {
    console.error("FS operation failed");
  }
};

await create();
