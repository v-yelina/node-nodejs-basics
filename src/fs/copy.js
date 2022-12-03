import fs from "fs";
import path from "path";
import { getUrl } from "../getUrl.js";

const dirToCopy = getUrl(import.meta.url, "files", "");
const destinationDir = getUrl(import.meta.url, "files_copy", "");

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
