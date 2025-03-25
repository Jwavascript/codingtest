let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

let [n, k] = input[0].split(" ").map(Number);

let arr = input[1].split(" ").map(Number);
let oddnumber = 0;
let evennumber = 0;
let start = 0;
let end = 0;
let max = 0;

while (end < n) {
  if (arr[end] % 2 !== 0) {
    oddnumber++;
  }
  if (arr[end] % 2 === 0) {
    evennumber++;
  }
  end++;
  if (oddnumber > k) {
    if (arr[start] % 2 !== 0) {
      oddnumber--;
    }
    if (arr[start] % 2 === 0) {
      evennumber--;
    }
    start++;
  }
  max = Math.max(max, evennumber);
}
console.log(max);
