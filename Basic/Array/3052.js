let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const set = new Set();

input.map(x=>set.add(Number(x)%42));
console.log(set.size);
