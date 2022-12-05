import { rm } from "node:fs/promises";
import { getPath } from "../customModules/getPath.js";

const remove = async () => {
  try {
    await rm(getPath(import.meta.url, "files", "fileToRemove.txt"));
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
