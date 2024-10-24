const fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

const count = Number(input[0]);
let words = [];

for(let i = 1; i<= count; i++){
  words.push(input[i].trim());
}
words.sort(compare);
words = [...new Set(words)];

for(let i = 0; i<words.length; i++){
  console.log(words[i]);
}


function compare(a, b){
  if(a.length-b.length!==0){
    return a.length-b.length;
  }
  else if(a.length === b.length){
    if(a > b){
      return 1;
    }
    else{
      return -1;
    }
  }
}
