let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

data = input[0].split(' ');
console.log(Number(data[0]) * Number(data[1]));