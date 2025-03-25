let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");
let alist = input[1].split(" ").map(Number);
let m = Number(input[2]);

let prefixSum = Array(alist.length + 1).fill(0);
for (let i = 0; i < alist.length; i++) {
  prefixSum[i + 1] = prefixSum[i] + alist[i];
}

for (let i = 0; i < m; i++) {
  let [start, end] = input[i + 3].split(" ").map(Number);
  console.log(prefixSum[end] - prefixSum[start - 1]);
}
