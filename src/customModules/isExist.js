import { access, constants } from "node:fs/promises";

export const isExist = async (path) => {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};
