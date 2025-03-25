let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

let n = Number(input[0]);
let alist = input[1].split(" ").map(Number);
let opers = input[2].split(" ").map(Number);

let max = -1000000000;
let min = 1000000000;

function dfs(i, result, add, sub, mul, div) {
  if (i === n) {
    max = Math.max(max, result);
    min = Math.min(min, result);
    return;
  }
  for (let j = 0; j < 4; j++) {
    if (j === 0 && add > 0) {
      dfs(i + 1, result + alist[i], add - 1, sub, mul, div);
    } else if (j === 1 && sub > 0) {
      dfs(i + 1, result - alist[i], add, sub - 1, mul, div);
    } else if (j === 2 && mul > 0) {
      dfs(i + 1, result * alist[i], add, sub, mul - 1, div);
    } else if (j === 3 && div > 0) {
      dfs(
        i + 1,
        result >= 0
          ? parseInt(result / alist[i])
          : -parseInt(-result / alist[i]),
        add,
        sub,
        mul,
        div - 1
      );
    }
  }
}

dfs(1, alist[0], opers[0], opers[1], opers[2], opers[3]);

console.log(max === 0 ? 0 : max);
console.log(min === 0 ? 0 : min);
