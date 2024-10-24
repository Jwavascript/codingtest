let fs = require('fs');
let input = fs.readFileSync("example.txt").toString().split('\n');

const n = Number(input[0]);

let inputPairs = [];

for(let i = 1; i<=n; i++){

  inputPairs.push(input[i].split(' ').map(Number));
}
const sortedPairs = inputPairs.sort((a, b) => a[1]-b[1]|| a[0]-b[0]);

let count = 0;
let end_time = -1;

for(const [start, end] of sortedPairs){
  if(start>=end_time){
    count+=1;
    end_time = end;
  }
}

console.log(count);