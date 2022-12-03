import fs from "fs";
import { getUrl } from "../getUrl.js";

const rename = async () => {
  const currentFileName = getUrl(import.meta.url, "files", "wrongFilename.txt");
  const newFileName = getUrl(import.meta.url, "files", "properFilename.md");
  fs.access(currentFileName, fs.constants.F_OK, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      fs.access(newFileName, fs.constants.F_OK, (err) => {
        if (err) {
          fs.rename(currentFileName, newFileName, (err) => {
            if (err) throw new Error("FS operation failed");
          });
        } else {
          throw new Error("FS operation failed");
        }
      });
    }
  });
};

await rename();
