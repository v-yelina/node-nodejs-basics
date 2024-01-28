import { cpus } from "os";
import { Worker } from "node:worker_threads";
import path from "node:path";
import { argv } from "node:process";

const performCalculations = async () => {
  const threadsNumber = cpus().length;
  Promise.all(createRuns(threadsNumber)).then((res) => {
    const results = res.map((data) =>
      data.computationsResult
        ? { status: "resolve", data: data.computationsResult }
        : { status: "error", data: null }
    );
    console.log(results);
  });
};

function createRuns(count) {
  const promiseArray = [];
  const workerUrl = `${path.dirname(argv[1])}${path.sep}worker.js`;
  for (let i = 0; i < count; i++) {
    promiseArray.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(workerUrl, {
          workerData: i + 10,
        });
        worker.on("message", resolve);
        worker.on("error", reject);
        worker.on("exit", (code) => {
          if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
        });
      })
    );
  }
  return promiseArray;
}

await performCalculations();
