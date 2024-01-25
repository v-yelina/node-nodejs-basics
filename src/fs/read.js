import fs from "fs";
import path from "node:path";

const read = async () => {
  const fileToReadPath = `${path.dirname(process.argv[1])}${path.sep}files${
    path.sep
  }fileToRead.txt`;

  fs.readFile(fileToReadPath, "utf8", (err, data) => {
    if (err) throw new Error("FS operation failed");
    console.log(data);
  });
};

await read();
