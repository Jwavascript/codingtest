let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

data = Number(input[0].split(' '));
answer = 0;
for(var i =1; i< data + 1; i++){
  answer += i;
}
console.log(answer);