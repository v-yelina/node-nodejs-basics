import { spawn } from "child_process";
import { getUrl } from "../getUrl.js";

const spawnChildProcess = async (...args) => {
  const fileToSpawnUrl = getUrl(import.meta.url, "/files", "/script.js");
  const spawnScript = spawn("node", [`${fileToSpawnUrl}`, ...args]);
  spawnScript.stdout.on("data", (data) => {
    console.log(data.toString());
  });
};

spawnChildProcess("arg1", "arg2", "arg3");
