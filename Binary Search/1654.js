let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

let k = Number(input[0].split(" ")[0]);
let n = Number(input[0].split(" ")[1]);
let lanarray = [];
for (i = 1; i <= k; i++) {
  lanarray.push(Number(input[i]));
}

let start = 1;
let end = Math.max(...lanarray);

function Cutsum(l) {
  let value = lanarray.reduce((acc, cur) => {
    return acc + parseInt(cur / l);
  }, 0);
  return value;
}

function findresult(start, end) {
  let result = 0;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (Cutsum(mid) >= n) {
      start = mid + 1;
      result = mid;
    } else {
      end = mid - 1;
    }
  }

  return result;
}

console.log(findresult(start, end));
