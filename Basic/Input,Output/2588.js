let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let a = input[0];
let b = input[1];

let b100 = b[0];
let b10= b[1];
let b1 = b[2];

console.log(Number(a) * Number(b1));
console.log(Number(a) * Number(b10));
console.log(Number(a) * Number(b100));
console.log(Number(a) * Number(b));