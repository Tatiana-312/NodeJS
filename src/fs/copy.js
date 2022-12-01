import { cp } from "node:fs/promises";
import { isExist } from "./customModules/isExist.js";
import { getPath } from "./customModules/getPath.js";

const copy = async () => {
  try {
    const srcPath = getPath(import.meta.url, "files", '');
    const destPath = getPath(import.meta.url, "files_copy", '');

    if (await isExist(destPath)) {
      throw new Error("FS operation failed");
    }
    await cp(srcPath, destPath, { recursive: true });
  } catch {
    console.error("FS operation failed");
  }
};

copy();
