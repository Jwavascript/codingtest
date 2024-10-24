let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let uniquearr = [...new Set(arr)];
uniquearr.sort((a, b) => a-b);

let myMap = new Map();
for(let i = 0; i<uniquearr.length; i++){
  myMap.set(uniquearr[i], i);
}

answer = "";
for(x of arr) answer += myMap.get(x) + " ";
console.log(answer);
