let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

class Queue{
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item){
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue(){
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  getLength(){
    return this.tailIndex-this.headIndex;
  }
}


let [n, k] = input[0].split(' ').map(Number);
let visited = new Array(100001).fill(0);


function bfs(){
  queue = new Queue();
  queue.enqueue(n);

  while(queue.getLength() != 0){
    let now = queue.dequeue();
    if(now == k){
      return visited[now];
    }
    for (let i of [now-1,  now+1, now*2]){
      if(i<0 || i> 100000) continue;
      if(visited[i] == 0){
        visited[i] = visited[now] + 1;
        queue.enqueue(i);
      }
    }
  }
}

console.log(bfs());