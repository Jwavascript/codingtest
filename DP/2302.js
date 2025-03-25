let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

let n = Number(input[0]);
let m = Number(input[1]);
let fixedseat = input.slice(2).map((e) => Number(e));
let part = [];

let dp = new Array(n + 1).fill(0);
dp[0] = 1;
dp[1] = 1;
dp[2] = 2;
for (let i = 3; i <= n; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}
if (m === 0) {
  console.log(dp[n]);
  return;
}
part.push(dp[fixedseat[0] - 1]);
for (let i = 1; i < m; i++) {
  part.push(dp[fixedseat[i] - fixedseat[i - 1] - 1]);
}
part.push(dp[n - fixedseat[m - 1]]);

console.log(part.reduce((acc, cur) => acc * cur, 1));
