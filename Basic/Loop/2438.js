let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

data = Number(input[0].split(' '));
answer = ""
for(var i = 1; i< data + 1; i++){
  for(var j = 1; j<i + 1; j++){
    answer +="*"
  }
  answer +="\n"
}
console.log(answer);