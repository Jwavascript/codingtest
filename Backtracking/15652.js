let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);

let arr = [];
for (let i= 1; i<=n; i++) arr.push(i);
let selected = [];

let answer = "";

function check(i, depth){
  if(depth=== 0){
    return true;
  }
  if(selected[depth-1] > i)return false;
  else return true;
}


function dfs(depth, arr){
  if(depth === m){
    for(let i of selected) answer += i + " ";
    answer += "\n";
  }
  else{
    for(i of arr){
      if(!check(i,depth))continue;
      else{
        selected.push(i);
        dfs(depth+1, arr);
        selected.pop();
      }
    }
  }
}

dfs(0, arr);
console.log(answer);