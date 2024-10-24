const rl = require('readline').createInterface({
  input:process.stdin,
  output:process.stdout
});

let input = [];
rl.on('line', function(line){
  input.push(line);
}).on('close', function(){
  let ballooninfo = input[1].split(' ').map(Number);
  let answer = 0;
  let arrow = new Array(1000001).fill(0);
  for(i of ballooninfo){
    if(arrow[i]>0){
      arrow[i] -=1;
      arrow[i-1] +=1;
    }
    else{
      arrow[i-1]+=1;
      answer +=1;
    }

  }
  console.log(answer);
  process.exit();
});