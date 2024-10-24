let fs = require('fs');
let input = fs.readFileSync("example.txt").toString().split('\n');

n = Number(input[0]);

count = 0;
three_count = 0;

while(n>=0){
  if(n%5==0){
    console.log(parseInt(n/5) + three_count);
    break;
  }
  n-=3;
  three_count+=1;
};
if(n<0){
  console.log(-1);
}