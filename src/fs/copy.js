import { access, constants, cp } from "node:fs/promises";
import { fileURLToPath } from "url";
import path from "path";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isDirExist = async (dirPath) => {
  try {
    await access(dirPath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};

const copy = async () => {
  try {
    const srcPath = path.join(__dirname, "files");
    const destPath = path.join(__dirname, "files_copy");

    if (await isDirExist(destPath)) {
      throw new Error();
    }
    await cp(srcPath, destPath, { recursive: true });
  } catch {
    console.error("FS operation failed");
  }
};

copy();
