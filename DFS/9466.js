let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let t = Number(input[0]);

for (let i = 1; i <= 2 * t - 1; i += 2) {
  let n = Number(input[i]);
  let testcase = input[i + 1].split(' ').map(Number);
  let visited = new Array(n + 1).fill(false);
  let finished = new Array(n + 1).fill(false);
  let count = 0;

  function dfs(now) {
    if (visited[now]) {
      if (!finished[now]) {
        let temp = now;
        do {
          count++;
          temp = testcase[temp - 1];
        } while (temp !== now);
      }
      return;
    }

    visited[now] = true;
    let nextNode = testcase[now - 1];
    dfs(nextNode);


    finished[now] = true;
  }

  for (let j = 1; j <= n; j++) {
    if (!visited[j]) {
      dfs(j);
    }
  }

  console.log(n - count);
}