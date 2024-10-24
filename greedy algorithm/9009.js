let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let pibo = [];
pibo.push(0);
pibo.push(1);
while (pibo[pibo.length-1] < 1e9){
  pibo.push(pibo[pibo.length-1] + pibo[pibo.length-2]);
}

let t = Number(input[0]);
for(let i = 1; i<=t; i++){
  let n = Number(input[i]);
  let lnoutput = [];
  let piboend = pibo.length-1;
  while(n>0){
    if( n>= pibo[piboend] ){
      n-=pibo[piboend];
      lnoutput.push(pibo[piboend]);
    }
    piboend-=1;
  }
  let answer = "";
  for(let i= lnoutput.length-1; i>=0; i--) answer += lnoutput[i] +' ';
  console.log(answer);
}

