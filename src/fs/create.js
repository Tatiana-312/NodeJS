import { writeFile } from "node:fs/promises";
import { isExist } from "../customModules/isExist.js";
import { getPath } from "../customModules/getPath.js";

const create = async () => {
  try {
    const filePath = getPath(import.meta.url, "files", "fresh.txt");

    if (await isExist(filePath)) {
      throw new Error("FS operation failed");
    }

    await writeFile(filePath, "I am fresh and young");
  } catch {
    console.error("FS operation failed");
  }
};

await create();
