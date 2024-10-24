let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

let n = Number(input[0]);
let winelist = [];

for (let i = 1; i <= n; i++) {
  winelist.push(Number(input[i]));
}

winelist.unshift(0);

let answerlist = new Array(n + 1).fill(0);

answerlist[1] = winelist[1];
answerlist[2] = winelist[1] + winelist[2];

if (n >= 3) {
  for (let i = 3; i <= n; i++) {
    let case1 = answerlist[i - 3] + winelist[i - 1] + winelist[i];
    let case2 = answerlist[i - 2] + winelist[i];
    let case3 = answerlist[i - 1];
    answerlist[i] = Math.max(case1, case2, case3);
  }
}

console.log(answerlist[n]);
