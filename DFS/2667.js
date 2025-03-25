let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

let n = Number(input[0]);
let board = input.slice(1).map((v) => v.split("").map((v) => Number(v)));
let visited = Array.from({ length: n }, () => Array(n).fill(false));
let answer = 0;
let answerlist = [];

let dx = [0, 0, 1, -1];
let dy = [1, -1, 0, 0];

function dfs(x, y) {
  visited[x][y] = true;
  answer++;

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
      if (board[nx][ny] === 1 && !visited[nx][ny]) {
        dfs(nx, ny);
      }
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === 1 && !visited[i][j]) {
      answer = 0;
      dfs(i, j);
      answerlist.push(answer);
    }
  }
}
console.log(answerlist.length);
answerlist.sort((a, b) => a - b);
console.log(answerlist.join("\n"));
