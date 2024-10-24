let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split("\n");

const arr = input[0].split("").map(Number);
function compare(a, b){
  return b-a;
}
arr.sort(compare);
str = arr.join("");
console.log(str);
