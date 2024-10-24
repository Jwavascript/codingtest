let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
arr.reverse();

let lis = [0];


function lowerBound(arr, target, start, end){
  while(start<end){
    let mid = parseInt((start + end)/2);
    if(arr[mid] >=target) end = mid;
    else start = mid + 1;
  }
  return end;
}



// 남아있는 병사의 수가 최대 -> 가장 긴 증가하는 부분수열
for(i of arr) {
  if (i > arr[-1]) {
    lis.push(i);

  } else {
    let index = lowerBound(lis, i, 0, lis.length);
    lis[index] = i;
  }
}

let answer = n-(lis.length-1);
console.log(answer);
