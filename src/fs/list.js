import fs from "fs";
import path from "node:path";

const list = async () => {
  const targetDir = `${path.dirname(process.argv[1])}${path.sep}files`;

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
