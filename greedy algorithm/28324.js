let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

const n = Number(input[0]);
let vlist = input[1].split(' ').map(Number);

// count from rear, compare min(prev+1, current)
let answer = 0;
let plusone = 1;
for(let i = n-1; i>=0; i--){
  let nowmax = Math.min(plusone, vlist[i]);
  answer+=nowmax;
  plusone=nowmax+1;
}
console.log(answer);