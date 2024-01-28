import fs from "fs";
import { createGzip } from "node:zlib";
import path from "node:path";
import { argv } from "node:process";

const compress = async () => {
  const fileToCompressUrl = `${path.dirname(argv[1])}${path.sep}files${path.sep}fileToCompress.txt`;
  const destinationUrl = `${path.dirname(argv[1])}${path.sep}files${path.sep}archive.gz`;
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
