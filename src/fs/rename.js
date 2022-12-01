import fs from "fs/promises";
import { getPath } from "./customModules/getPath.js";

const rename = async () => {
  try {
    const oldPath = getPath(import.meta.url, "files", "wrongFilename.txt");
    const newPath = getPath(import.meta.url, "files", "properFilename.md");
    await fs.rename(oldPath, newPath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();
