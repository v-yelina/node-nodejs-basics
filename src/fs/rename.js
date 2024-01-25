import fs from "fs";
import path from "node:path";

const rename = async () => {
  const currentFileName = `${path.dirname(process.argv[1])}${path.sep}files${
    path.sep
  }wrongFilename.txt`;
  const newFileName = `${path.dirname(process.argv[1])}${path.sep}files${
    path.sep
  }properFilename.md`;
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
