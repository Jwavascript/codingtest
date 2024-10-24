let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

const n = input[0].split(' ')[0];
let k = Number(input[0].split(' ')[1]);
let coinvalue = [];
let maxvalue = 0;
let usedcoin = 0;

for(let i = 1; i<=n; i++){
  coinvalue.push(Number(input[i]));
}

for(let i = n-1; i>=0; i--){
  if(coinvalue[i] <= k){
    while(coinvalue[i]<=k){
      k -=coinvalue[i];
      usedcoin++;
    }
  }

}
console.log(usedcoin);