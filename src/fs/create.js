import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dir = path.join(__dirname, "/files/fresh.txt");
const text = "I am fresh and young";

const create = async () => {
  console.log(dir);
  fs.access(dir, fs.constants.F_OK, (err) => {
    if (err) {
      fs.appendFile(dir, text, (err) => {});
    } else {
      throw new Error("FS operation failed");
    }
  });
};

await create();
