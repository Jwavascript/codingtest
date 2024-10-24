let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let testCaseCount = Number(input[0]);

function looseJsonParse(obj) {
  return Function('"use strict";return(' + obj + ")")();
}

for (let i = 0; i < testCaseCount; i++) {
  let m = Number(input[i + 1]);
  let arr = [];
  for (let j = 1; j <= m; j++) {
    arr.push(j);
  }
  dfs(0, [], arr, m);
  console.log();
}

function dfs(depth, selected, arr, m) {
  if (depth == m - 1) {
    let str = '';
    for (let i = 0; i < m - 1; i++) {
      str += arr[i] + selected[i];
    }
    str += arr[m - 1] + '';
    let resultcase = looseJsonParse(str.split(' ').join(''));
    if (resultcase == 0) console.log(str);
    return;
  }

  for (let x of [' ', '+', '-']) {
    selected.push(x);
    dfs(depth + 1, selected, arr, m); // 재귀 함수 호출
    selected.pop();
  }
}
