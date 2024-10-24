const readline = require('readline');

const rl= readline.createInterface({
  input:process.stdin,
  output : process.stdout,
});

let prize = 0;
let input = [];
rl.on('line', (data)=>{
  input = data.split(' ');
  rl.close();
})

rl.on('close', ()=>{
  d1 = Number(input[0]);
  d2 = Number(input[1]);
  d3 = Number(input[2]);

  if(d1==d2 && d2 ==d3){
    prize = 10000 + d1 *1000;
  }
  else if(d1 == d2){
    prize = 1000 + d1 * 100;
  }
  else if(d1 == d3 ){
    prize = 1000 + d1 * 100;
  }
  else if(d2 == d3){
    prize = 1000 + d2 * 100;
  }
  else{
    prize = Math.max(d1, d2, d3) * 100;
  }
  console.log(prize);
})