let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let arr = input[0]split('-');
answer = 0;

for(let i = 0; i<arr.length; i++){
  let element = arr[i].split('+').map(Number);
  let elsum = element.reduce((a,b)=>(a+b));
  if(i == 0){
    answer+=elsum;
  }else{
    answer-=elsum;
  }

}
console.log(answer);

