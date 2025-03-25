let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

let [n, m] = input[0].split(" ").map((e) => Number(e));
let map = [];
let house = [];
let chicken = [];
let answer = 987654321;

for (let i = 1; i <= n; i++) {
  map.push(input[i].split(" ").map((e) => Number(e)));
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (map[i][j] === 1) {
      house.push([i, j]);
    } else if (map[i][j] === 2) {
      chicken.push([i, j]);
    }
  }
}

let visited = new Array(chicken.length).fill(0);
let selected = [];

function dfs(start, depth) {
  if (depth === m) {
    let sum = 0;
    for (let i = 0; i < house.length; i++) {
      let min = 987654321;
      for (let j = 0; j < selected.length; j++) {
        let dist =
          Math.abs(house[i][0] - selected[j][0]) +
          Math.abs(house[i][1] - selected[j][1]);
        min = Math.min(min, dist);
      }
      sum += min;
    }
    answer = Math.min(answer, sum);
    return;
  }
  for (let i = start; i < chicken.length; i++) {
    if (visited[i] === 0) {
      visited[i] = 1;
      selected.push(chicken[i]);
      dfs(i, depth + 1);
      visited[i] = 0;
      selected.pop();
    }
  }
}

dfs(0, 0);
console.log(answer);
