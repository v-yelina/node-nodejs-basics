import fs from "fs";
import { createGzip } from "node:zlib";
import { getUrl } from "../getUrl.js";

const compress = async () => {
  const fileToCompressUrl = getUrl(import.meta.url, "files", "fileToCompress.txt");
  const destinationUrl = getUrl(import.meta.url, "files", "archive.gz");
  const readable = fs.createReadStream(fileToCompressUrl);
  const writable = fs.createWriteStream(destinationUrl);
  const gzip = createGzip();
  readable
    .pipe(gzip)
    .pipe(writable)
    .on("finish", () => {
      writable.end();
    });
};

await compress();
