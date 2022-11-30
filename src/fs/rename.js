import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const currentPath = path.join(__dirname, "/files/wrongFilename.txt");
const newPath = path.join(__dirname, "/files/properFilename.md");

const rename = async () => {
  fs.access(currentPath, fs.constants.F_OK, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      fs.access(newPath, fs.constants.F_OK, (err) => {
        if (err) {
          fs.rename(currentPath, newPath, (err) => {});
        } else {
          throw new Error("FS operation failed");
        }
      });
    }
  });
};

await rename();
