import fs from "fs";
import { getUrl } from "../getUrl.js";

const read = async () => {
  const fileToReadPath = getUrl(import.meta.url, "files", "fileToRead.txt");

  fs.readFile(fileToReadPath, "utf8", (err, data) => {
    if (err) throw new Error("FS operation failed");
    console.log(data);
  });
};

await read();
