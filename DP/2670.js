let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

let n = Number(input[0]);

let givenlist = [];

for (let i = 1; i <= n; i++) {
  givenlist.push(Number(input[i]));
}

for (let i = 1; i < n; i++) {
  givenlist[i] = Math.max(givenlist[i], givenlist[i] * givenlist[i - 1]);
}

console.log(Math.max(...givenlist).toFixed(3));
