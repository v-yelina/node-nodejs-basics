import { createReadStream } from "node:fs";
import { stdout } from "node:process";
import path from "node:path";
const { createHash } = await import("node:crypto");
import { argv } from "node:process";

const fileToHash = `${path.dirname(argv[1])}${path.sep}files${path.sep}fileToCalculateHashFor.txt`;

const calculateHash = async () => {
  const input = createReadStream(fileToHash);
  const hash = createHash("sha256");
  input.on("error", (err) => {
    process.stderr.write(err.message);
  });
  input.pipe(hash).setEncoding("hex").pipe(stdout);
};

await calculateHash();
