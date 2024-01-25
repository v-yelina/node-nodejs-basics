import fs from "fs";
import path from "node:path";

const create = async () => {
  const fileToWriteUrl = `${path.dirname(process.argv[1])}${path.sep}files${path.sep}fresh.txt`;

  const textToWrite = "I am fresh and young";

  fs.access(fileToWriteUrl, fs.constants.F_OK, (err) => {
    if (err) {
      fs.appendFile(fileToWriteUrl, textToWrite, (err) => {
        if (err) throw new Error("FS operation failed");
      });
    } else {
      throw new Error("FS operation failed");
    }
  });
};

await create();
