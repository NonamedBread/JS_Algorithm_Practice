const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  line.split(" ").forEach((el) => input.push(Number(el)));
}).on("close", () => {
  let temp = input[0];

  for (let i = 1; i < input.length; i++) {
    temp = temp < input[i] ? temp : input[i];
  }
});
