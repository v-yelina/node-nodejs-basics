import fs from "fs";
import path from "node:path";

const remove = async () => {
  const fileToRemoveUrl = `${path.dirname(process.argv[1])}${path.sep}files${
    path.sep
  }fileToRemove.txt`;

  fs.unlink(fileToRemoveUrl, (err) => {
    if (err) throw new Error("FS operation failed");
  });
};

await remove();
