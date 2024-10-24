let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let t = Number(input[0]);
let n=1; //xpt
let tc = 2;


for(let i = 0; i<t; i++){
  let n_array = [];
  n = n + Number(input[n]) + 1;
  let count = 0;
  let minvalue = 100005;
  for(let i= tc ; i<n; i++){
    n_array.push(input[i].split(" ").map(Number));
  }
  n_array.sort((x,y)=>x[0]-y[0]);

  for (let i = 0; i<n_array.length; i++){
    if(n_array[i][1] < minvalue){
      minvalue = n_array[i][1];
      count++;
    }
  }
  console.log(count);

  tc = n+1;
}



