import path from "path";
import { fileURLToPath } from "url";

export const getUrl = (url, folder, file) => {
  const __filename = fileURLToPath(url);
  const __dirname = path.dirname(__filename);
  return path.join(__dirname, `${folder}${file}`);
};
