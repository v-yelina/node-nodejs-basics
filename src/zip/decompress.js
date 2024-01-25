import fs from "fs";
import { createGunzip } from "node:zlib";
import path from "node:path";
import { argv } from "node:process";

const decompress = async () => {
  const fileToDecompressUrl = `${path.dirname(argv[1])}${path.sep}files${path.sep}archive.gz`;
  const destinationUrl = `${path.dirname(argv[1])}${path.sep}files${path.sep}fileToCompress.txt`;
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
