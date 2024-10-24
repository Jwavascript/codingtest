let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

let k = Number(input[0]);
let arrows = input[1].split(" ");
let selected;
let lowest = 10000000000;
let highest = 0;

function dfs(current, depth, number) {
  number += current;
  selected[current] = 1;

  if (depth == k) {
    lowest = Math.min(lowest, Number(number));
    highest = Math.max(highest, Number(number));
  } else {
    if (arrows[depth] === "<") {
      for (let i = current + 1; i <= 9; i++) {
        if (selected[i] == 1) {
          continue;
        } else {
          dfs(i, depth + 1, number);
        }
      }
    } else if (arrows[depth] === ">") {
      for (let i = 0; i < current; i++) {
        if (selected[i] == 1) {
          continue;
        } else {
          dfs(i, depth + 1, number);
        }
      }
    }
  }
  selected[current] = 0;
}

for (let i = 0; i <= 9; i++) {
  selected = new Array(k + 1).fill(0);
  dfs(i, 0, "");
}

if (lowest.toString().length !== k + 1) {
  lowest = "0" + lowest;
}
console.log(highest);
console.log(lowest);
