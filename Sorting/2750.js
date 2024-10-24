const readline = require('readline');

const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout,
});

let uniqueset = new Set();
rl.on('line', function(line){
  if(Number(line) > 0){
    uniqueset.add(Number(line))
  }
}).on('close', function(){
  let uniquearr = [...uniqueset];
  uniquearr.sort((a,b)=>a-b);
  let answer ="";
  for(let i =0; i<uniquearr.length; i++){
    console.log(uniquearr[i]);
  }
})