import fs from "fs";
import { getUrl } from "../getUrl.js";

const list = async () => {
  const targetDir = getUrl(import.meta.url, "files", "");

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
