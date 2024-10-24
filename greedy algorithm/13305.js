let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let n = Number(input[0]);
let road_length = input[1].split(' ').map(Number);
road_length.push(0);

let oil_price = input[2].split(' ').map(Number);
let min_oil = 1000000001;
let min_total = BigInt(0);

let remain_distance = road_length.reduce((a,b)=> a+b);


for(let i = 0; i<oil_price.length; i++){
  if(oil_price[i]<min_oil){
    min_oil = oil_price[i];
  }
  min_total += BigInt(min_oil) * BigInt(road_length[i]);

}

console.log(String(min_total));


