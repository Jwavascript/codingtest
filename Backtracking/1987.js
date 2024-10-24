let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let [r, c] = input[0].split(' ').map(Number);
let board = [];
let max = 0;

// 방향 배열을 사용하여 네 방향을 탐색
const directions = [
  [1, 0], // 아래쪽
  [0, 1], // 오른쪽
  [-1, 0], // 위쪽
  [0, -1] // 왼쪽
];

// 보드 초기화
for(let i = 1; i <= r; i++) {
  input[i] = input[i].trim();
  board.push(input[i].split(''));
}

// 비트마스크를 사용한 DFS
function dfs(i, j, depth, visited) {
  max = Math.max(max, depth);

  for (let [di, dj] of directions) {
    let ni = i + di;
    let nj = j + dj;

    if (ni >= 0 && ni < r && nj >= 0 && nj < c) {
      let charCode = board[ni][nj].charCodeAt(0) - 'A'.charCodeAt(0);
      if ((visited & (1 << charCode)) === 0) {
        // 방문하지 않은 알파벳일 경우
        dfs(ni, nj, depth + 1, visited | (1 << charCode));
      }
    }
  }
}

// 첫 번째 칸부터 시작 (0,0)
let initialChar = board[0][0].charCodeAt(0) - 'A'.charCodeAt(0);
dfs(0, 0, 1, 1 << initialChar);

console.log(max);
