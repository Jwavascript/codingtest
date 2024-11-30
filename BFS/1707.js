let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let linkedarray = [];
let visited;

// 테스트 케이스의 개수 k
let k = Number(input[0]);
let currentline = 1;

function bfs(x) {
  let queue = new Queue();

  queue.enqueue(x);
  visited[x] = 0;

  while (queue.getLength() !== 0) {
    let current = queue.dequeue();
    let nextlist = linkedarray[current];
    for (let next of nextlist) {
      if (visited[next] === -1) {
        visited[next] = (visited[current] + 1) % 2;
        queue.enqueue(next);
      } else if (visited[next] === visited[current]) {
        return false;
      }
    }
  }
  return true;
}

for (let i = 0; i < k; i++) {
  let [v, e] = input[currentline].split(" ").map(Number);

  // 매 테스트 케이스마다 linkedarray를 새로운 빈 배열로 초기화
  linkedarray = new Array(v + 1).fill(null).map(() => []);

  visited = new Array(v + 1).fill(-1);

  // u, v를 입력받고 linkedarray에 추가
  for (let line = currentline + 1; line <= currentline + e; line++) {
    let [u, v] = input[line].split(" ").map(Number);
    linkedarray[u].push(v);
    linkedarray[v].push(u);
  }

  let isBipartite = true;
  for (let vertex = 1; vertex <= v; vertex++) {
    if (visited[vertex] === -1) {
      if (!bfs(vertex)) {
        isBipartite = false;
        break;
      }
    }
  }

  console.log(isBipartite ? "YES" : "NO");

  currentline += e + 1;
}
