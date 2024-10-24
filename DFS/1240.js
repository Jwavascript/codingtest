let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let graph = [];

for (let i = 0; i <= n; i++) {
  graph[i] = [];
}

for (let i = 1; i < n; i++) {
  let [n1, n2, l] = input[i].split(" ").map(Number);

  graph[n1].push([n2, l]);
  graph[n2].push([n1, l]);
}

for (let i = n; i < n + m; i++) {
  let visited = new Array(n + 1).fill(false);
  let [now, goal] = input[i].split(" ").map(Number);
  dfs(now, goal, 0, visited);
}

function dfs(now, goal, dist, visited) {
  if (now === goal) {
    console.log(dist);
    return;
  }
  visited[now] = true;
  for ([i, cost] of graph[now]) {
    if (!visited[i]) {
      dfs(i, goal, dist + cost, visited);
    }
  }
}
