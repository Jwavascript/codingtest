let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

// given inputs
let n = Number(input[0]);
let budgetreq = input[1].split(' ').map(Number);
let m = Number(input[2]);

// sum of required budget of cities
const reqsum = budgetreq.reduce((acc, cur)=>acc+cur,0);

function findmaxbudget(budgetlist,m){
  let start = 1;
  let end = Math.max(...budgetlist);
  let result = 0;

  while(start<=end){
    let mid = parseInt((start+end)/2);
    let budgetsum =0;
    for(x of budgetlist){
      budgetsum += Math.min(mid, x);
    }
    if(budgetsum >m){
      end = mid-1;
    }else{
      result = mid;
      start = mid+1;
    }
  }
  return result;
}

if(reqsum<=m){
  console.log(Math.max(...budgetreq));
}else{
  let maxbud = findmaxbudget(budgetreq, m);
  console.log(maxbud);
}