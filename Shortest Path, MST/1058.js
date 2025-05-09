let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

let n = Number(input[0]);

let friendarray = [];
let twofriendarray = [];

for (let i = 0; i < n; i++) {
  twofriendarray.push(new Array(n).fill(0));
}

for (let i = 1; i <= n; i++) {
  friendarray.push(input[i].trim().split(""));
}

for (let j = 0; j < n; j++) {
  for (let k = 0; k < n; k++) {
    if (friendarray[j][k] == "Y") {
      twofriendarray[j][k] += 1;
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      if (j !== k) {
        if (
          friendarray[j][i] == "Y" &&
          friendarray[k][i] == "Y" &&
          twofriendarray[j][k] == 0
        ) {
          twofriendarray[j][k] += 1;
        }
      }
    }
  }
}

let maxsum = 0;

for (i of twofriendarray) {
  let sum = i.reduce((a, b) => a + b);
  maxsum = Math.max(maxsum, sum);
}

console.log(maxsum);
