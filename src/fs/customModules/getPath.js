import { fileURLToPath } from "url";
import path from "path";
import { dirname } from "path";

export const getPath = (url, foldername, filename) => {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);
  const fullPath = path.join(__dirname, foldername, filename);
  return fullPath;
};
