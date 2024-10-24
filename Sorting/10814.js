let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let n = Number(input[0]);
let data = [];
for(let i = 1; i<=n; i++){
  let dataline = input[i].split(' ');
  dataline[0] = Number(dataline[0]);
  dataline[1] = dataline[1].trim();
  data.push(dataline);
}

function compare(a, b){
  if(a[0] != b[0]){
    return a[0]-b[0];
  }

}

data.sort(compare);
let answer = "";
for( let element of data){
  answer += element[0] + " " +element[1] +"\n";
}
console.log(answer);