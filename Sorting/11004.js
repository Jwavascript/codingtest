const fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let firstline = input[0].split(' ');
const count = Number(firstline[0]);
const target = Number(firstline[1]);

let secondline = input[1].split(' ');
secondline= secondline.map(x=>Number(x));

secondline.sort((a,b)=> a-b);
console.log(secondline[target-1]);
