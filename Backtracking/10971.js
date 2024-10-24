let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let n = Number(input[0]);
let w = [];
for(let i = 1; i<=n; i++)w.push(input[i].split(" ").map(Number));


let visited = new Array(n).fill(false);
let selected = [];
let answer = 0;
let min = 10000001;

function check(j, depth){

  if(depth===0){ //아무것도 추가하지 않았을 때
    return true;
}
  if(w[selected[depth-1]][j] ==0|| visited[j]){
    return false;
  }
  else{
    return true;
  }
}
function dfs(depth){
  if(depth === n){
    for(let idx = 1; idx<=selected.length-1; idx++){
      answer+=w[selected[idx-1]][selected[idx]];
    }
    if(w[selected[selected.length-1]][selected[0]]!==0){
      answer += w[selected[selected.length-1]][selected[0]];
    }
    else{
      answer +=10000000;
    }


    min = Math.min(min, answer);
    answer=0;
  }
  else{
    for(let i = 0; i<n; i++){ // 가능한 모든 도시에 대해 반복
      if(check(i, depth) === false){
        continue;
      }
      selected.push(i);
      visited[i] = true;

      dfs(depth+1);
      selected.pop();
      visited[i] = false;


    }
  }
}

dfs(0);
console.log(min);