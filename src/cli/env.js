const parseEnv = () => {
  Object.entries(process.env).map((item) => {
    if (item[0].startsWith("RSS_")) {
      console.log(`${item[0]}=${item[1]}`);
    }
  });
};

parseEnv();
