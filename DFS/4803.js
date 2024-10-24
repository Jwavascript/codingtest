let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let line = 0;
let caseNumber = 1;
let answer = 0;

while(input[line] !== "0 0"){
  let [n, m] = input[line].split(' ').map(Number);

  const graph = Array.from({length : n+1}, ()=>[]);



  for(let i = line+1; i<=line+m; i++){
     let [u, v] = input[i].split(' ').map(Number);
     graph[u].push(v);
     graph[v].push(u);
  }

  let visited = new Array(n+1).fill(false);
  function dfs(node, parent){
    visited[node] = true;
    for(const neighbor of graph[node]){
      if(neighbor === parent)continue;
      if(visited[neighbor]) return false;
      if(!dfs(neighbor, node)) return false;
    }
    return true;
  }

  for(let i = 1; i<=n; i++){
    if(!visited[i] && dfs(i, -1)){
      answer++;
    }
  }

  if(answer === 0){
    console.log(`Case ${caseNumber}: No trees.`);
  }else if(answer ===1){
    console.log(`Case ${caseNumber}: There is one tree.`);
  }else{
    console.log(`Case ${caseNumber}: A forest of ${answer} trees.`);
  }

  line += (m+1);
  caseNumber+=1;
  answer = 0;


}

