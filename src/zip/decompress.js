import fs from "fs";
import { createGunzip } from "node:zlib";
import { getUrl } from "../getUrl.js";

const decompress = async () => {
  const fileToDecompressUrl = getUrl(import.meta.url, "/files", "/archive.gz");
  const destinationUrl = getUrl(import.meta.url, "/files", "/fileToCompress.txt");
  const readable = fs.createReadStream(fileToDecompressUrl);
  const writable = fs.createWriteStream(destinationUrl);
  const gzip = createGunzip();
  readable
    .pipe(gzip)
    .pipe(writable)
    .on("finish", () => {
      writable.end();
    });
};

await decompress();
