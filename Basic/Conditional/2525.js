const readline = require("readline");

const rl = readline.createInterface({
  input : process.stdin,
  output: process.stdout,
});
let count = 0;

let input = [];
let time = 0;
rl.on('line', (line) =>{
  count +=1;
  if(count == 1){
    input = line.split(' ');
  }

  if(count == 2){
    time = Number(line.trim());
    rl.close();
  }

})
rl.on('close', ()=>{
  h = parseInt(input[0]);
  m = parseInt(input[1]);

    newm = (m + time) % 60;
    newh = h+ parseInt((m + time)/60);
    if(newh>=24){
      newh-=24;
    }
  console.log(`${newh} ${newm}`);
})