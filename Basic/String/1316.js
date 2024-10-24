const fs = require('fs');

let input = fs.readFileSync('example.txt').toString().split('\n');

const wordcount = Number(input[0].trim());
let result = 0;

for(let i = 1; i<wordcount+1; i++){
  let set = new Set();
  let word = input[i];
  for (let j = 0; j<word.length; j++){
    if(i>0 && (word[j]!==word[j-1]) && set.has(word[j])){
      break;
    }
    if(j== word.length-1){
      result+=1;
    }
    set.add(word[j]);
  }

}

console.log(result);



