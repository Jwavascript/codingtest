let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');


let n = Number(input[0].split(' ')[0]);
let m = Number(input[0].split(' ')[1]);
let possible = [];
function check(i){
    if(possible.includes(i)) return false;
    else
      return true
}


function dfs(start){
  if(possible.length==m){
    console.log(...possible);
  }
  for(let i = start; i<=n; i++){
    if(!check(i))continue;
    possible.push(i);
    dfs(1);
    possible.pop();
  }
}
dfs(1);