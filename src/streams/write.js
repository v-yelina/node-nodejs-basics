import { createWriteStream } from "node:fs";
import readline from "readline";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToWrite = path.join(__dirname, "/files/fileToWrite.txt");

const write = async () => {
  const writable = createWriteStream(fileToWrite);
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
