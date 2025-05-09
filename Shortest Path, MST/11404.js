let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

let INF = 1e9;

let n = Number(input[0]);
let m = Number(input[1]);

let graph = [new Array(n + 1).fill(INF)];

for (let i = 1; i <= n; i++) {
  graph.push(new Array(n + 1).fill(INF));
  graph[i][i] = 0;
}

for (let i = 2; i <= m + 1; i++) {
  let [cityone, citytwo, distance] = input[i].split(" ").map(Number);
  graph[cityone][citytwo] = Math.min(graph[cityone][citytwo], distance);
}

for (let k = 1; k <= n; k++) {
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      if (graph[a][b] > graph[a][k] + graph[k][b]) {
        graph[a][b] = graph[a][k] + graph[k][b];
      }
    }
  }
}

for (let a = 1; a <= n; a++) {
  let line = "";
  for (let b = 1; b <= n; b++) {
    if (graph[a][b] == INF) {
      line += "0 ";
    } else {
      line += graph[a][b] + " ";
    }
  }
  console.log(line);
}
