import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetDir = path.join(__dirname, "/files");

const list = async () => {
  fs.readdir(targetDir, { withFileTypes: true }, (err, files) => {
    if (err) throw new Error("FS operation failed");
    else {
      const filesNames = [];
      files.forEach((file) => {
        if (file.isFile()) {
          filesNames.push(file.name);
        }
      });
      console.log(filesNames);
    }
  });
};

await list();
