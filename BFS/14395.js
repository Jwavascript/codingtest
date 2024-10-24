let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n')

class Queue{
  constructor(){
    this.items = {}
    this.frontIndex = 0
    this.backIndex = 0
  }
  enqueue(item){
    this.items[this.backIndex]=item
    this.backIndex++
  }
  dequeue(){
    const item = this.items[this.frontIndex]
    delete this.items[this.frontIndex]
    this.frontIndex++
    return item
  }
  getlength(){
    return this.backIndex-this.frontIndex
  }
}

let [s,t] = input[0].split(' ').map(Number)
let visited = new Map();
let prev = new Map();

function bfs() {
  queue = new Queue();
  queue.enqueue([s, ""]);

  while (queue.getlength() !== 0) {
    let [now, ops] = queue.dequeue();
    if (now === t) {
      visited.set(now, true);
      console.log(ops);
      return;
    }
    if (visited.has(now)) continue;
    visited.set(now, true);

    if (now * now <= 1e9) queue.enqueue([now * now, ops + "*"]);
    if (now + now <= 1e9) queue.enqueue([now + now, ops + "+"]);
    if (now - now >= 1) queue.enqueue([0, ops + "-"]);
    if (now !== 0) queue.enqueue([1, ops + "/"]);

  }
}

if(s ===t){
  console.log(0);
}else{
  bfs();
  if(!visited.has(t)){
    console.log(-1);
  }
}
