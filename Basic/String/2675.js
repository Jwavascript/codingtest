const readline = require('readline');

const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout,
});

let input = [];
let arr = [];

rl.on('line', function (line){
  input.push(line);
}).on('close', function(){
  let totalcount = Number(input[0].trim());
  for(let i = 1; i<totalcount +1; i++){
    arr = input[i].split(' ');
    let arrcount = Number(arr[0].trim());
    let arrstring = arr[1];

    let newstring = ""

    for(let j = 0; j<arrstring.length; j++){
      for(let k=0; k<arrcount; k++){
        newstring +=arrstring[j];
      }
    }
    console.log(newstring);
  }
})