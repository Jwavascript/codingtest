let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");
let n = Number(input[0]);

let nlist = new Array(1000001).fill(0);

nlist[1] = 0;
nlist[2] = 1;

for (let i = 3; i <= n; i++) {
  nlist[i] = nlist[i - 1] + 1;
  if (i % 2 === 0) {
    nlist[i] = Math.min(nlist[i], nlist[i / 2] + 1);
  }
  if (i % 3 === 0) {
    nlist[i] = Math.min(nlist[i], nlist[i / 3] + 1);
  }
}
console.log(nlist[n]);
