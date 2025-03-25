let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

a = Number(input[0].split(" ")[0]);
b = Number(input[0].split(" ")[1]);
count = 0;

while (b > a) {
  if (b % 10 == 1) {
    b = parseInt(b / 10);
    count += 1;
  } else if (b % 2 == 0) {
    b /= 2;
    count += 1;
  } else {
    count = -2;
    break;
  }
}
if (a != b) {
  count = -2;
}
console.log(count + 1);
