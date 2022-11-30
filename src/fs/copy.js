import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dirToCopy = path.join(__dirname, "/files/");
const destinationDir = path.join(__dirname, "/files_copy/");

const copy = async (source, destination) => {
  fs.readdir(source, { withFileTypes: true }, (err, files) => {
    if (err) throw new Error("FS operation failed");
    else {
      fs.mkdir(destination, (err) => {
        if (err) throw new Error("FS operation failed");
      });
      files.forEach((file) => {
        if (file.isFile()) {
          fs.copyFile(path.join(source, file.name), path.join(destination, file.name), (err) => {
            if (err) throw new Error("FS operation failed");
          });
        } else if (file.isDirectory()) {
          copy(path.join(source, file.name), path.join(destination, file.name));
        }
      });
    }
  });
};

copy(dirToCopy, destinationDir);
