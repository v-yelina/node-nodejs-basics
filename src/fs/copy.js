import fs from "fs";
import path from "path";

const dirToCopy = `${path.dirname(process.argv[1])}${path.sep}files`;
const destinationDir = `${path.dirname(process.argv[1])}${path.sep}files_copy`;

const copy = async () => {
  fs.readdir(dirToCopy, { withFileTypes: true }, (err, files) => {
    if (err) throw new Error("FS operation failed");
    else {
      fs.mkdir(destinationDir, (err) => {
        if (err) throw new Error("FS operation failed");
      });
      files.forEach((file) => {
        if (file.isFile()) {
          fs.copyFile(
            path.join(dirToCopy, file.name),
            path.join(destinationDir, file.name),
            (err) => {
              if (err) throw new Error("FS operation failed");
            }
          );
        } else if (file.isDirectory()) {
          copy(path.join(dirToCopy, file.name), path.join(destinationDir, file.name));
        }
      });
    }
  });
};

await copy();
