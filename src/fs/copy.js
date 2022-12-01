import { access, constants, cp } from "node:fs/promises";
import { fileURLToPath } from "url";
import path from "path";
import { dirname } from "path";
import { isExist } from "./customModules/exist.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
  try {
    const srcPath = path.join(__dirname, "files");
    const destPath = path.join(__dirname, "files_copy");

    if (await isExist(destPath)) {
      throw new Error("FS operation failed");
    }
    await cp(srcPath, destPath, { recursive: true });
  } catch {
    console.error("FS operation failed");
  }
};

copy();
