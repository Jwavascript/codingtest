let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

let t = Number(input[0]);

let pnlist = new Array(101).fill(0);

pnlist[1] = 1;
pnlist[2] = 1;
pnlist[3] = 1;
pnlist[4] = 2;
pnlist[5] = 2;

for (let i = 6; i <= 100; i++) {
  pnlist[i] = pnlist[i - 1] + pnlist[i - 5];
}

for (let i = 1; i <= t; i++) {
  let tc = Number(input[i]);
  console.log(pnlist[tc]);
}
