let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let a1b1 = [];
let a2b2 = [];

//get input of a1b1
const[a1, b1] =input[0].split(' ').map(Number);
for(let i = 1; i< a1 + 1; i++ ){
  a1b1.push(input[i].split(' ').map(Number))
}

//get input of a2b2
const[a2, b2] = input[a1+1].split(' ').map(Number);
for(let i = a1+2; i<a1+a2+2; i++){
  a2b2.push(input[i].split(' ').map(Number));
}

let answer = "";

for(let i = 0; i<a1; i++ ){
  for(let j = 0; j<b2; j++){
    let value = 0;
    for(let k = 0; k<b1; k++){
      value += a1b1[i][k] * a2b2[k][j];

    }
    answer+=value + " ";
  }
  answer+="\n";
}

console.log(answer);
