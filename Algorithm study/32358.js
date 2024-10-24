let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

let count = Number(input[0]);
let totalmove = 0;
let trashlist = [];
let currentpoint = 0;

let findNext = function (arr) {
  let min = 200000000;
  let mindex = 0;
  arr.sort((a, b) => b - a);
  for (let i in arr) {
    distance = Math.abs(arr[i]);
    if (min >= distance) {
      min = distance;
      mindex = i;
    }
  }
  totalmove += min;
  currentpoint = trashlist[mindex];
  trashlist.splice(mindex, 1);
};

for (let i = 1; i <= count; i++) {
  if (input[i] == 2) {
    while (trashlist.length > 0) {
      let trashdistance = trashlist.map((x) => x - currentpoint);
      findNext(trashdistance);
    }
  } else {
    let trash = Number(input[i].split(" ")[1]);
    trashlist.push(trash);
  }
}

console.log(totalmove);
