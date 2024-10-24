let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");
let count = 0;

let reverseString = function (str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  if (str === joinArray) {
    count += 1;
  }
};

for (let i = 1; i <= Number(input[0]); i++) {
  reverseString(input[i].trim());
}
if (count <= 1) {
  console.log(0);
} else console.log(count * (count - 1));
