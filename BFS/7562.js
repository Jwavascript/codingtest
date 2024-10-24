let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

let n = Number(input[0]);
let knight = [
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
];
let answer = "";

class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }
  enqueue(item) {
    this.items[this.backIndex] = item;
    this.backIndex++;
  }
  dequeue() {
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }
  getLength() {
    return this.backIndex - this.frontIndex;
  }
}

function bfs(x, y, endx, endy, l) {
  let queue = new Queue();
  let visited = Array.from(Array(l), () => Array(l).fill(0)); // 각 테스트 케이스마다 visited 배열 초기화
  queue.enqueue([x, y]);
  visited[x][y] = 1;
  let depth = 0;

  if (x == endx && y == endy) return 0;

  while (queue.getLength() !== 0) {
    let size = queue.getLength();
    for (let i = 0; i < size; i++) {
      let current = queue.dequeue();
      let [currX, currY] = current;

      for (let j = 0; j < 8; j++) {
        let nextx = currX + knight[j][0];
        let nexty = currY + knight[j][1];

        if (
          nextx >= 0 &&
          nexty >= 0 &&
          nextx < l &&
          nexty < l &&
          visited[nextx][nexty] == 0
        ) {
          if (nextx == endx && nexty == endy) return depth + 1;
          queue.enqueue([nextx, nexty]);
          visited[nextx][nexty] = 1;
        }
      }
    }
    depth++;
  }
}

for (let i = 0; i < n; i++) {
  let l = Number(input[3 * i + 1]);
  let [startx, starty] = input[3 * i + 2].split(" ").map(Number);
  let [endx, endy] = input[3 * i + 3].split(" ").map(Number);
  let result = bfs(startx, starty, endx, endy, l);
  answer += result + "\n";
}

console.log(answer.trim());
