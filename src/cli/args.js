const parseArgs = () => {
  const argsArr = process.argv.slice(2);
  let resultStringArr = [];
  for (let i = 0; i < argsArr.length; i += 2) {
    resultStringArr.push(`${argsArr[i].slice(2)} is ${argsArr[i + 1]}`);
  }
  console.log(resultStringArr.join(", "));
};

parseArgs();
