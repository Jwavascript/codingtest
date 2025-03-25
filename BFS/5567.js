let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);
let m = Number(input[1]);

let relation = Array.from({ length: n + 1 }, () => []);
let visited = new Array(n + 1).fill(false);

for (let i = 2; i < 2 + m; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  relation[a].push(b);
  relation[b].push(a);
}

class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    if (this.front < this.items.length) {
      return this.items[this.front++];
    }
    return null;
  }
  isEmpty() {
    return this.front >= this.items.length;
  }
}

let queue = new Queue();
queue.enqueue(1);
visited[1] = true;

let answer = 0;
let level = 0;

while (!queue.isEmpty() && level < 2) {
  let size = queue.items.length - queue.front;
  while (size--) {
    let now = queue.dequeue();
    for (let next of relation[now]) {
      if (!visited[next]) {
        visited[next] = true;
        answer++;
        queue.enqueue(next);
      }
    }
  }
  level++;
}

console.log(answer);
