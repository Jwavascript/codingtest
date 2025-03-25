let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

let [n, l, r] = input[0].split(" ").map(Number);
let map = input.slice(1).map((v) => v.split(" ").map(Number));
let visited = Array.from(Array(n), () => Array(n).fill(false));
let answer = 0;
let dx = [0, 0, -1, 1];
let dy = [1, -1, 0, 0];

function bfs(x, y) {
  let queue = [[x, y]];
  let union = [[x, y]];
  let sum = map[x][y];
  visited[x][y] = true;

  while (queue.length > 0) {
    let [cx, cy] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = cx + dx[i];
      let ny = cy + dy[i];

      if (nx >= 0 && nx < n && ny >= 0 && ny < n && !visited[nx][ny]) {
        let diff = Math.abs(map[cx][cy] - map[nx][ny]);
        if (diff >= l && diff <= r) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
          union.push([nx, ny]);
          sum += map[nx][ny];
        }
      }
    }
  }

  let avg = Math.floor(sum / union.length);
  union.forEach(([x, y]) => (map[x][y] = avg));
  return union.length > 1;
}

while (true) {
  let isChanged = false;
  visited = visited.map((v) => v.fill(false));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && bfs(i, j)) isChanged = true;
    }
  }

  if (!isChanged) break;
  answer++;
}

console.log(answer);
