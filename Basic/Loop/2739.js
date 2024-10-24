let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

inum = Number(input[0]);

for(var i =1; i<10; i++){
  console.log(`${inum} * ${i} = ${inum * i}`);
}

