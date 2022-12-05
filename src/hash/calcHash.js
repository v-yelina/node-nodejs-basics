import { createReadStream } from "node:fs";
import { stdout } from "node:process";
const { createHash } = await import("node:crypto");
import { getUrl } from "../getUrl.js";

const fileToHash = getUrl(import.meta.url, "/files", "/fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const input = createReadStream(fileToHash);
  const hash = createHash("sha256");
  input.pipe(hash).setEncoding("hex").pipe(stdout);
};

await calculateHash();
