import { readdir } from "node:fs/promises";
import { getPath } from "../customModules/getPath.js";

const list = async () => {
  try {
    const files = await readdir(getPath(import.meta.url, "files", ""));
    console.log(files);
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
