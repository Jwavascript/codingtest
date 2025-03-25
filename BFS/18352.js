let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

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

let [n, m, k, x] = input[0].split(" ").map(Number);
let linkedarray = new Array(n + 1).fill(null).map(() => []);
let visited = new Array(n + 1).fill(-1);

for (let i = 1; i <= m; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  linkedarray[a].push(b);
}

let queue = new Queue();
queue.enqueue(x);
visited[x] = 0;

while (queue.getLength() !== 0) {
  let current = queue.dequeue();
  let nextlist = linkedarray[current];
  for (let next of nextlist) {
    if (visited[next] === -1) {
      visited[next] = visited[current] + 1;
      queue.enqueue(next);
    }
  }
}

let answer = [];
for (let i = 1; i <= n; i++) {
  if (visited[i] === k) {
    answer.push(i);
  }
}

if (answer.length === 0) {
  console.log(-1);
} else {
  console.log(answer.join("\n"));
}
