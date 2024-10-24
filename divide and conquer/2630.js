let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let n = Number(input[0]);
let board = [];
board.push(new Array(n+1).fill(3)); // fill board[0][n] to another color
//  this is because index will be approached from 1.


for(let i = 1; i<=n; i++){
  let line = input[i].split(' ').map(Number);
  line.unshift(3);// fill board[n][0] to another color
  board.push(line);
}

let bluecount = 0;
let whitecount = 0;

function check(start_x, start_y, end_x, end_y){
  const standard = board[start_x][start_y]
  for(i = start_x; i<=end_x; i++){
    for(j=start_y; j<=end_y; j++){
      if(standard ^ board[i][j] ===1 ){
        return false;
      }
    }
  }
  return true;
}


function dfs(start_x, start_y, end_x, end_y){
  if( check(start_x, start_y, end_x, end_y)){
    if(board[start_x][start_y] === 1 )
      bluecount+=1;
    else if(board[start_x][start_y] === 0)
      whitecount +=1;
  }
  else{
    dfs((end_x+start_x +1)/2, start_y, end_x, (start_y + end_y -1)/2) //the first quadrant
    dfs((end_x+start_x +1)/2, (start_y + end_y +1)/2, end_x, end_y) // the second quadrant
    dfs(start_x,(start_y + end_y +1)/2, (end_x+start_x -1)/2, end_y) // the third quadrant
    dfs(start_x, start_y, (end_x+start_x -1)/2, (start_y + end_y -1)/2) // the fourth quadrant}
}}

dfs(1, 1, n, n);
console.log(whitecount);
console.log(bluecount);