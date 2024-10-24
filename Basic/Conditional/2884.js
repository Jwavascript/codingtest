const readline = require("readline");

const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout,
});

let input = [];
rl.on("line", (data)=>{
  input = data.split(' ');
  rl.close();
})

rl.on('close', ()=>{
  h = parseInt(input[0]);
  m = parseInt(input[1]);

  if( m-45 >= 0){
    m = m-45;
    h = h;

  }
  else{
    m = m +15;
    if(h-1>=0){
      h = h-1;
    }
    else{
      h= 23;
    }
  }
  console.log(`${h} ${m}`);
})