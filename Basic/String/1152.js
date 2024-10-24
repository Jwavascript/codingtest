const readline = require('readline');
const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout,
});

let arr = [];

rl.on('line', function(line){
  arr= (line.trim()).split(' ');
  rl.close();
}).on('close', function(){
  if(arr ==''){
    console.log(0);
  }
  else{
    console.log(arr.length);
  }

})