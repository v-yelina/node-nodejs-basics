const parseEnv = () => {
  let resultStringArr = [];
  Object.entries(process.env).map((item) => {
    if (item[0].startsWith("RSS_")) {
      resultStringArr.push(`${item[0]}=${item[1]}`);
    }
  });
  console.log(resultStringArr.join("; "));
};

parseEnv();
