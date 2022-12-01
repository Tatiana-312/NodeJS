import fs from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  try {
    const oldPath = path.join(__dirname, "files", "wrongFilename.txt");
    const newPath = path.join(__dirname, "files", "properFilename.md");
    await fs.rename(oldPath, newPath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();
