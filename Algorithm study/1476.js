let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let [e, s, m] = input[0].split(' ').map(Number);

let count = s;
while ((count - e) % 15 !== 0 || (count - m) % 19 !== 0) {
  count += 28;
}

console.log(count);
