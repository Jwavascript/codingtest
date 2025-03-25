let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let map = input.slice(1, n + 1).map((v) => v.split(" ").map(Number));

let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];

// 외부 공기 표시 BFS 함수
function markOutsideAir() {
  let visited = Array.from({ length: n }, () => Array(m).fill(false));
  let queue = [[0, 0]];
  visited[0][0] = true;
  map[0][0] = -1; // 외부 공기 (-1)로 표시

  while (queue.length > 0) {
    let [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && !visited[nx][ny]) {
        if (map[nx][ny] === 0 || map[nx][ny] === -1) {
          map[nx][ny] = -1; // 외부 공기로 변경
          queue.push([nx, ny]);
        }
        visited[nx][ny] = true;
      }
    }
  }
}

// 치즈가 모두 녹을 때까지 반복
let time = 0;
while (true) {
  markOutsideAir(); // 외부 공기 업데이트
  let meltedCheese = [];

  // 녹을 치즈 찾기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 1) {
        let airCount = 0;
        for (let k = 0; k < 4; k++) {
          let ni = i + dx[k];
          let nj = j + dy[k];
          if (map[ni][nj] === -1) airCount++; // 외부 공기와 접촉한 변 개수 증가
        }
        if (airCount >= 2) meltedCheese.push([i, j]); // 녹을 치즈 저장
      }
    }
  }

  if (meltedCheese.length === 0) break; // 녹을 치즈가 없으면 종료

  // 치즈 녹이기
  meltedCheese.forEach(([x, y]) => (map[x][y] = -1));

  time++;
}

console.log(time);
