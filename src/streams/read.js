import { createReadStream } from "node:fs";
import { stdout } from "node:process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToRead = path.join(__dirname, "/files/fileToRead.txt");

const read = async () => {
  const readable = createReadStream(fileToRead);
  readable.pipe(stdout);
};

await read();
