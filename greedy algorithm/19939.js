let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let n= Number(input[0].split(" ")[0]);
let k = Number(input[0].split(" ")[1]);



for(let i = k; i>=1; i--){
  n-=i;
}
let difference = k-1;

if(n < 0){
  console.log(-1);
}

else if(n>=0){
  if(n%k == 0){
    console.log(k-1);
  }
  else if(n%k !=0){
    console.log(k);
  }
}

