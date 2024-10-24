const readline = require('readline');

const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout,
});

let count = 0;
let n =0
let arr = 0;
input = [];
rl.on('line', (line)=> {
  count += 1;
  if (count === 1) {
    n = Number(line.trim());
  }
  if (count === 2) {
    arr = line.split(' ').map(x=>Number(x));
    rl.close();
  }
})
rl.on('close',()=>{
  minValue = arr.reduce((a, b)=>Math.min(a,b));
  maxValue = arr.reduce((a, b)=>Math.max(a, b));
  console.log(minValue+" " + maxValue);
})
