let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");
let [n, x] = input[0].split(" ").map(Number);
let dailyvisit = input[1].split(" ").map(Number);
let max = 0;
let count = 0;

let start = 0;
let end = x - 1;
let sum = 0;

for (let i = start; i <= end; i++) {
  sum += dailyvisit[i];
}

max = sum;
count++;
start++;
end++;

while (end < n) {
  sum = sum - dailyvisit[start - 1] + dailyvisit[end];
  if (sum > max) {
    max = sum;
    count = 1;
  } else if (sum === max) {
    count++;
  }
  start++;
  end++;
}

if (max === 0) {
  console.log("SAD");
} else {
  console.log(max);
  console.log(count);
}
