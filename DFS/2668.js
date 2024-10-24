let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let n = Number(input[0]);
let visited = new Array(n+1).fill(0);
let finished = new Array(n+1).fill(0);

let graph = [];
let loop = [];

for(let i = 1; i <= n; i++){
  graph.push(Number(input[i]));
}


function dfs(now){

  if(visited[now]==1){
    if(finished[now] ==0){
      let tem = now;
      let push = now;
      do{
        loop.push(push);
        push = graph[push-1];
      }while(push !==now);
    }
    return;
  }

  visited[now] = 1;
  let nextnode = graph[now-1];
  dfs(nextnode);

  finished[now] = 1;
}


for(let i = 0; i<=n; i++){
  if(!visited[i]){
    dfs(i);
  }
}
loop.sort((a,b)=>a-b);

console.log(loop.length);
for(i of loop)console.log(i);