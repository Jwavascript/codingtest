let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let n = Number(input[0]);
let foods = [];
for(let i = 1; i<=n; i++){
  foods.push(input[i].split(' ').map(Number));
}

let mindiff = 1000000000;
let selected = [];
let checked = new Array(10).fill(false);


function dfs(depth){
  if(depth===n+1){
    return;
  }
  else{
    if(depth>=1){
      let sour = 1;
      let bitter = 0;
      for(i of selected){
        sour *= foods[i][0];
        bitter += foods[i][1];
      }
      mindiff = Math.min(Math.abs(sour-bitter), mindiff);

    }

    for(let i = 0; i<n; i++){
      if(checked[i]){
        continue;
      }
      selected.push(i);
      checked[i] = true;
      dfs(depth+1);
      selected.pop();
      checked[i] = false;
    }
  }
}
dfs(0);
console.log(mindiff);