const readline = require('readline');

const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout,
});

let input = [];
let arr = [];
let arrcnt = 0;
let average = 0;
let percentage = 0;
rl.on('line', function(line){
  input.push(line)
}).on('close', function(){
  let linecount = Number(input[0].trim());
  for(let i = 1; i<linecount + 1; i++){
    arr = input[i].split(' ').map(x=>Number(x));
    arrcnt = Number(arr[0]);
    arr = arr.slice(1, arrcnt + 1);
    average = arr.reduce((a, b)=> a+b)/arrcnt;
    percentage= (arr.reduce((a, b)=> b>average?a+1:a, 0)/arrcnt * 100).toFixed(3);
    console.log(`${percentage}%`);
  }
})