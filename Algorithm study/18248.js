let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let distance = new Array(m+1).fill(0);
let answer= "YES";

for(let i=1; i<=n; i++){
  let line = input[i].split(' ').map(Number);
  let zerodistance = 1000;
  for(let j =0; j<m; j++){
    if(line[j] === 0){
      zerodistance = Math.min(zerodistance,distance[j+1]);
      distance[j+1]++;
    }else if(line[j] ===1){
      if(zerodistance<distance[j+1]){
        answer = "NO";
        break;
      }
    }
  }
}

console.log(answer);