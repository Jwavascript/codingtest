const fs = require('fs');

let input = fs.readFileSync('example.txt').toString().split('\n');

let arr = [];
arr = input[0].split(' ');

let a = arr[0];
let b = arr[1];

let newa = "";
let newb = "";

for(let i=2; i >=0; i--){
  newa+=a[i];
  newb+=b[i];
}
console.log(Math.max(Number(newa), Number(newb)));