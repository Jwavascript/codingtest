let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let [n, q] = input[0].split(' ').map(Number);
let sequence = input[1].split(' ').map(Number);
let ans = '';
let prefixSum = new Array(n + 1).fill(0);
for (let i = 0; i < n; i++) {
  prefixSum[i + 1] = prefixSum[i] + sequence[i];
}
let rotation = 0;

for (let i = 2; i < 2 + q; i++) {
  let query = input[i].split(' ').map(Number);
  if (query[0] === 1) {
    rotation = (rotation - query[1] + n) % n;
  } else if (query[0] === 2) {
    rotation = (rotation + query[1]) % n;
  } else if (query[0] === 3) {
    let a = (query[1] - 1 + rotation) % n + 1;
    let b = (query[2] - 1 + rotation) % n + 1;

    if (a <= b) {
      ans+=  prefixSum[b] - prefixSum[a - 1]+'\n';
    } else {
      ans+= prefixSum[n] - prefixSum[a - 1] + prefixSum[b] +'\n';
    }
  }
}
console.log(ans);
