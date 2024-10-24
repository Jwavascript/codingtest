let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

let n = Number(input[0]);
let cardlist = input[1].split(" ").map(Number);
let m = Number(input[2]);
let findlist = input[3].split(" ").map(Number);

cardlist = cardlist.sort((a, b) => a - b);

function UpperBound(target) {
  let start = -1;
  let end = n;
  while (start + 1 < end) {
    let mid = parseInt((start + end) / 2);
    if (cardlist[mid] > target) {
      end = mid;
    } else {
      start = mid;
    }
  }

  return end;
}

function LowerBound(target) {
  let start = -1;
  let end = n;
  while (start + 1 < end) {
    let mid = parseInt((start + end) / 2);
    if (cardlist[mid] >= target) {
      end = mid;
    } else {
      start = mid;
    }
  }

  return end;
}

let resultlist = findlist.map(function cal(t) {
  return UpperBound(t) - LowerBound(t);
});

const answer = resultlist.join(" ");
console.log(answer.trim());
