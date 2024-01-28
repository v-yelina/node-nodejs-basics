import fs from "fs";
import { createWriteStream } from "node:fs";
import readline from "readline";
import path from "node:path";
import { argv } from "node:process";

const write = async () => {
  const fileToWriteUrl = `${path.dirname(argv[1])}${path.sep}files${path.sep}fileToWrite.txt`;
  fs.access(fileToWriteUrl, fs.constants.F_OK, (err) => {
    if (err) {
      throw new Error(err);
    } else {
      const writable = createWriteStream(fileToWriteUrl);

      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false,
      });

      rl.on("line", (line) => {
        writable.write(line + "\n");
      }).on("close", () => {
        writable.end();
      });
    }
  });
};

await write();
