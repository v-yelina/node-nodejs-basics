import { createWriteStream } from "node:fs";
import readline from "readline";
import { getUrl } from "../getUrl.js";

const write = async () => {
  const fileToWriteUrl = getUrl(import.meta.url, "files", "fileToWrite.txt");

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
};

await write();
