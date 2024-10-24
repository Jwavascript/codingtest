let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = input.map(x=>Number(x));
maxValue = arr.reduce((a, b)=>(Math.max(a,b)));
position = arr.indexOf(maxValue);
console.log(maxValue);
console.log(position + 1);
