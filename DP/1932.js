let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

let n = Number(input[0]);
let givenArray = [];
for (let i = 1; i <= n; i++) {
  givenArray.push(input[i].split(" ").map(Number));
}

let biggestSumArray = [];
for (let i = 1; i <= n; i++) {
  biggestSumArray.push(new Array(i).fill(0));
}

biggestSumArray[0][0] = givenArray[0][0];

function findBiggest(line, order) {
  if (order === 0) {
    return biggestSumArray[line - 1][order];
  } else if (order === line) {
    return biggestSumArray[line - 1][order - 1];
  } else {
    return Math.max(
      biggestSumArray[line - 1][order - 1],
      biggestSumArray[line - 1][order]
    );
  }
}

for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    biggestSumArray[i][j] = findBiggest(i, j) + givenArray[i][j];
  }
}

console.log(Math.max(...biggestSumArray[n - 1]));
