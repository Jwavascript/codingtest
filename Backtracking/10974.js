let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let n = Number(input[0]);
let arr = [];
for(let i = 1; i<=n; i++) arr.push(i);

let selected = [];


function check(i){
  if( selected.includes(i))return false;
  else return true;
}

function dfs(depth){
  if(depth===n){
    console.log(...selected);
  }
  else{
    for(i of arr){
      if(check(i) === false){
        continue;
      }

      selected.push(i);

      dfs(depth+1);


      selected.pop();
    }

  }
}
dfs(0);