import { Transform } from "node:stream";

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, _encoding, callback) {
      this.push(chunk.toString().split("").reverse().join(""));
      callback();
    },
  });
  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
