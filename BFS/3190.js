let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().trim().split("\n");

let n = Number(input[0]);
let k = Number(input[1]);
let apple = input.slice(2, 2 + k).map((v) => v.split(" ").map(Number));
let l = Number(input[2 + k]);
let change = input.slice(3 + k).map((v) => v.split(" "));
let direction = 0; // 처음 방향 (동쪽)
let time = 0;
let dx = [0, 1, 0, -1]; // 동, 남, 서, 북
let dy = [1, 0, -1, 0];
let board = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
let index = 0;
let answer = 0;

// 방향 변경 정보 저장 (O(1) 조회 가능)
let directionMap = {};
for (let [x, c] of change) {
  directionMap[Number(x)] = c;
}

// 사과 위치 표시
for (let [x, y] of apple) {
  board[x][y] = 1;
}

// 뱀의 몸을 저장할 deque (배열 사용)
let snake = [[1, 1]];
board[1][1] = 2; // 뱀의 몸 표시

while (true) {
  time++;
  let [x, y] = snake[snake.length - 1]; // 머리 위치
  let nx = x + dx[direction];
  let ny = y + dy[direction];

  // 벽 또는 몸과 충돌하면 종료
  if (nx < 1 || nx > n || ny < 1 || ny > n || board[nx][ny] === 2) {
    answer = time;
    break;
  }

  // 이동한 칸에 사과가 있는 경우 -> 사과를 먹고 길이 유지
  if (board[nx][ny] === 1) {
    board[nx][ny] = 2;
  } else {
    // 사과가 없는 경우 -> 꼬리 이동 (길이 유지)
    let [tx, ty] = snake.shift();
    board[tx][ty] = 0;
  }

  // 머리 위치 추가
  snake.push([nx, ny]);
  board[nx][ny] = 2;

  // 방향 변경 확인
  if (directionMap[time]) {
    if (directionMap[time] === "D") {
      direction = (direction + 1) % 4;
    } else {
      direction = (direction + 3) % 4;
    }
  }
}

console.log(answer);
