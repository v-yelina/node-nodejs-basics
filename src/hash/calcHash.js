import { createReadStream } from "node:fs";
import { stdout } from "node:process";
const { createHash } = await import("node:crypto");
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToHash = path.join(__dirname, "/files/fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const input = createReadStream(fileToHash);
  const hash = createHash("sha256");
  input.pipe(hash).setEncoding("hex").pipe(stdout);
};

await calculateHash();
