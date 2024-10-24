let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

const n = Number(input[0]);
let timelist = input[1].split(' ').map(Number);

function compare(a, b){
  return a-b;
}
timelist.sort(compare);
let answer = 0;

for(let i =0; i< n; i++){
  answer += timelist[i]*(n-i);
}
console.log(answer);