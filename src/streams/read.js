import { createReadStream } from "node:fs";
import { stdout } from "node:process";
import { getUrl } from "../getUrl.js";

const read = async () => {
  const fileToReadUrl = getUrl(import.meta.url, "files", "fileToRead.txt");
  const readable = createReadStream(fileToReadUrl);
  readable.pipe(stdout);
};

await read();
