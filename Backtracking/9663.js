let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let n = Number(input[0]);
let selected = [];
let answer = 0;

function check(depth, i){
  for(let j of selected){
    if(depth === j[0] || i === j[1] || Math.abs(j[0]-depth)=== Math.abs(j[1]-i)){
      return false;
    }
  }
  return true;
}
function dfs(depth){
  if(depth===n){
    answer+=1;
    return;
  }
  for(let i = 0; i<n; i++){
    if(!check(depth, i)){
      continue;
    }
    selected.push([depth, i]);
    dfs(depth+1);
    selected.pop();
  }
}

dfs(0);
console.log(answer);