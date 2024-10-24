const fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

const count = Number(input[0]);

let dots = [];

for(let i = 1; i <= count; i++){
  dots.push(input[i].trim().split(' '));
}

function compare(a, b){
  if(a[0] !== b[0]){
    return Number(a[0])-Number(b[0]);
  }
  else if(a[0] ==b[0]){
    return Number(a[1])-Number(b[1]);
  }
}
dots.sort(compare);

let answer = "";
for(let i =0; i<dots.length; i++){
  answer += `${dots[i][0]} ${dots[i][1]}`
  answer +="\n";
}

console.log(answer.trim());



