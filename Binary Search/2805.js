let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

const m = Number(input[0].split(" ")[1]);
let treearray = input[1].split(" ").map(Number);

function Cutsum(h) {
  let value = treearray.reduce((acc, cur) => {
    return cur >= h ? acc + cur - h : acc;
  }, 0);
  return value;
}

let start = 0;
let end = Math.max(...treearray);

function findresult(start, end) {
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (Cutsum(mid) >= m) {
      result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
}

console.log(findresult(start, end));
