import fs from "fs";
import { getUrl } from "../getUrl.js";

const remove = async () => {
  const fileToRemoveUrl = getUrl(import.meta.url, "/files", "/fileToRemove.txt");

  fs.unlink(fileToRemoveUrl, (err) => {
    if (err) throw new Error("FS operation failed");
  });
};

await remove();
