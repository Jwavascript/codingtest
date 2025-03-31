let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().trim().split("\n");

let [n, m, h] = input[0].split(" ").map(Number);
let blocklist = input.slice(1).map((v) => v.split(" ").map(Number));

let dp = new Array(h + 1).fill(0);
dp[0] = 1;

for (let blocks of blocklist) {
  let newDp = [...dp];
  for (let block of blocks) {
    for (let j = h; j >= block; j--) {
      newDp[j] = (newDp[j] + dp[j - block]) % 10007;
    }
  }
  dp = newDp;
}

console.log(dp[h] === 0 ? 0 : dp[h]);
