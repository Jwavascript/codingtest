const fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let scount = Number(input[0].trim());
let sarr = input[1].split(' ').map(x=>Number(x));
let maxscore = sarr.reduce((a, b)=> Math.max(a, b));
let nsarr = sarr.map(x=>x/maxscore*100);
let newaver = nsarr.reduce((a,b)=> a + b)/scount;
console.log(newaver);



