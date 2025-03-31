let fs = require("fs");
let input = fs.readFileSync("example.txt").toString();

let n = Number(input);
const MOD = 1000000000;

let dp = Array.from(Array(n + 1), () => Array(10).fill(0));

for (let j = 1; j < 10; j++) {
  dp[1][j] = 1;
}

for (let i = 2; i <= n; i++) {
  for (let j = 0; j < 10; j++) {
    if (j === 0) {
      dp[i][j] = dp[i - 1][j + 1] % MOD;
    } else if (j >= 1 && j <= 8) {
      dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % MOD;
    } else if (j === 9) {
      dp[i][j] = dp[i - 1][j - 1] % MOD;
    }
  }
}

let result = dp[n].reduce((acc, cur) => acc + cur) % MOD;
console.log(result);
