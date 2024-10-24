let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

const n = Number(input[0]);
let board = [];
for(let i = 1; i<= n; i++){
  board.push(input[i].trim().split(''));
}
let answer = 0;
function check(){
  let count = 1;
  let rowmax = 1;
  let colmax = 1;
  for(let i = 0; i<n; i++){
    for(let j =0; j<n-1; j++){
      if(board[i][j] == board[i][j+1]){
        count+=1;
      }
      else{
        count = 1;
      }
      rowmax = Math.max(rowmax, count);
    }
    count = 1;
  }
  for(let j = 0; j<n; j++){
    for(let i =0; i<n-1; i++){
      if(board[i][j] == board[i+1][j]){
        count+=1;
      }
      else{
        count = 1;
      }
      colmax = Math.max(colmax, count);
    }
    count = 1;
  }
  return(Math.max(colmax, rowmax));
}

for(let i = 0; i<n; i++){
  for(let j = 0; j<n; j++){
    if(j+1<n){
      let temp = board[i][j];
      board[i][j] = board[i][j+1];
      board[i][j+1] = temp;
      answer = Math.max(answer, check());
      board[i][j+1] = board[i][j];
      board[i][j] = temp;
    }
    if(i+1<n){
      let temp = board[i][j];
      board[i][j] = board[i+1][j];
      board[i+1][j] = temp;
      answer = Math.max(answer, check());
      board[i+1][j] = board[i][j];
      board[i][j] = temp;
    }
  }
}
console.log(answer);



