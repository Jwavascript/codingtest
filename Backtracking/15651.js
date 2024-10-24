let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let n = Number(input[0].split(' ')[0]);
let m = Number(input[0].split(' ')[1]);
let arr = [];
for (let i = 1; i<=n; i++){arr.push(i)};
let selected = [];

let answer = "";
function dfs(arr, depth){

  if(depth=== m){
    for(let i of selected) answer+= i +" ";
    answer += "\n"
  }
  else {

    for (let i of arr) {

      selected.push(i);

      dfs(arr, depth + 1);
      selected.pop(i);


    }
  }
}

dfs(arr, 0);
console.log(answer);