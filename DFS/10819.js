let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

let n = Number(input[0]);
let numbers = input[1].split(" ").map(Number);
let testcase = [];
let visited = new Array(n + 1).fill(false);
let answer = 0;

function dfs(start) {
  if (start === n) {
    let sum = 0;
    for (let i = 0; i < n - 1; i++) {
      sum += Math.abs(testcase[i] - testcase[i + 1]);
    }
    answer = Math.max(answer, sum);
    return;
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      testcase.push(numbers[i]);
      dfs(start + 1);
      visited[i] = false;
      testcase.pop();
    }
  }
}

dfs(0);
console.log(answer);
