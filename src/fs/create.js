import fs from "fs";
import { getUrl } from "../getUrl.js";

const create = async () => {
  const fileToWriteUrl = getUrl(import.meta.url, "/files", "/fresh.txt");
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
