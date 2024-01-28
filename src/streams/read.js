import { createReadStream } from "node:fs";
import { stdout, argv } from "node:process";
import path from "node:path";

const read = async () => {
  const fileToReadUrl = `${path.dirname(argv[1])}${path.sep}files${path.sep}fileToRead.txt`;
  const readable = createReadStream(fileToReadUrl);
  readable.on("error", (err) => {
    process.stderr.write(err.message);
  });
  readable.pipe(stdout);
};

await read();
