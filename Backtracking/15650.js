let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');


let n = Number(input[0].split(' ')[0]);
let m = Number(input[0].split(' ')[1]);
let arr = [];
for (let i = 1; i<=n; i++){arr.push(i)};

let selected = [];
function check(i, depth){
  if(depth === 0){
    return true;
  }
  if(selected[depth-1] >= i) return false;
  else
    return true;
}

function dfs(arr, depth){

  if(depth === m){
    console.log(...selected);
  }
  else {

    for (let i of arr) {

      if(check(i, depth) === false ){
        continue;
      }
      selected.push(i);

      dfs(arr, depth + 1);
      selected.pop(i);


    }
  }
}

dfs(arr, 0);