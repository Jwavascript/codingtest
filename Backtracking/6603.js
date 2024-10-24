let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

const totalcase = input.indexOf('0');
let k = 0;
let givencase = [];

let selected = [];
let checked = [];

for( let i =0; i< totalcase; i++){
  k = input[i].split(" ").map(Number)[0];
  givencase= input[i].split(" ").map(Number).slice(1);
  checked = new Array(k).fill(false);
  dfs(0, 0);
  console.log('');
}
function dfs(depth, start){

  if(depth === 6){
    console.log(...selected);
    return;
  }

  for(let i = start; i< k; i++){
    if(checked[i]){
      continue;
    }
    selected.push(givencase[i]);
    checked[i] = true;
    dfs(depth+1, i+1);
    selected.pop();
    checked[i] = false;
    }
}
