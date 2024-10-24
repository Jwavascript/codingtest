let fs = require('fs');
let input = fs.readFileSync("example.txt").toString().split('\n');

let s = Number(input[0]);
let n = 0;

for(let i = 1; s>=0; i++){
  s-=i;
  n++;
}

console.log(n-1);