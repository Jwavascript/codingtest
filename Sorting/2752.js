  const fs = require('fs');
  let input = fs.readFileSync('example.txt').toString().split('\n');

let arr = input[0].split(' ').map(x=>Number(x));

console.log(arr);
let tem = 0;
for(let i=0; i<arr.length; i++){
  if(i+1 < arr.length){
    if(arr[i] > arr[i+1]){
      tem = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = tem;
    }
  }
}

arr.map(x=>console.log(x));
