let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let [n, k, m] = input[0].split(' ').map(Number);
let visited = new Array(n+1).fill(0);
let 


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
  queue.enqueue(1);



  while(queue.getLength()!=0){
    let now = queue.dequeue();
    if(now==n){
      return visited[now];
    }
    for(let i = 1; i<=m; i++){
      let hypelist = input[i].split(' ').map(Number);
      let nowindex = hypelist.indexOf(now);
      if(nowindex!==-1){
        for(let j of hypelist){
          if(visited[j] ==1){
            visited[j] = visited[now] +1;
            queue.enqueue(j);
          }
        }
      }

    }


  }
}

console.log(bfs());