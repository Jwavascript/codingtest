let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n')


let x = Number(input[0]);
let visited = new Array(1000001).fill(0);
let prev = new Array(1000001).fill(-1);
class Queue{
  constructor() {
    this.items = {}
    this.frontIndex = 0
    this.backIndex = 0
  }
  enqueue(item){
    this.items[this.backIndex] = item
    this.backIndex++
  }
  dequeue(){
    const item = this.items[this.frontIndex]
    delete this.items[this.frontIndex];
    this.frontIndex++
    return item
  }
  getLength(){
    return this.backIndex-this.frontIndex;
  }
}

function bfs(){
  queue = new Queue();
  queue.enqueue(x);

  while(queue.getLength()!=0){
    let now = queue.dequeue();
    if(now===1){
      return visited[now];
    }

    for(let i of [now/3, now/2, now-1]){
      if(i%1!==0) continue;
      if(visited[i] ===0){
        visited[i] = visited[now]+1;
        prev[i] = now;
        queue.enqueue(i);
      }
    }
  }
}

function getPath(){
  let path = [];
  let current = 1;
  while(current!==-1){
    path.push(current);
    current = prev[current];
  }
  return path.reverse();
}

console.log(bfs());
console.log(getPath().join(' '));
