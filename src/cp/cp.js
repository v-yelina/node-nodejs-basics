import { spawn } from "child_process";
import path from "node:path";
import { argv } from "node:process";

const spawnChildProcess = async (...args) => {
  const fileToSpawnUrl = `${path.dirname(argv[1])}${path.sep}files${path.sep}script.js`;
  const spawnScript = spawn("node", [`${fileToSpawnUrl}`, ...args]);
  spawnScript.stdout.pipe(process.stdout);
  process.stdin.pipe(spawnScript.stdin);
};

spawnChildProcess("arg1", "arg2", "arg3", "arg4");
