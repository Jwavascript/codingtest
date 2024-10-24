const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = Number(input[0]);
let inputstr = input[1];

let result = 0;
for(let i=0; i<inputstr.length; i++){
  result += Number(inputstr[i]);
}
console.log(result);