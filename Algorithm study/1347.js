let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let l = Number(input[0]);
let content = input[1].split("");
let currentDirection = "s"; // 현재 방향은 남쪽
let currentX = 0;
let currentY = 0;
let selected = [];
selected.push([currentY, currentX]);

for (let i of content) {
  if (i === "R" || i === "L") {
    rotate(i);
  }
  if (i === "F") {
    walk();
  }
}

selected.sort((a, b) => a[0] - b[0]);

let minY = Math.min(...selected.map(coord => coord[0]));
let minX = Math.min(...selected.map(coord => coord[1]));

if (minY < 0) {
  let addY = Math.abs(minY);
  for (let coord of selected) {
    coord[0] += addY;
  }
}
if (minX < 0) {
  let addX = Math.abs(minX);
  for (let coord of selected) {
    coord[1] += addX;
  }
}

const rows = Math.max(...selected.map(coord => coord[0])) + 1;
const cols = Math.max(...selected.map(coord => coord[1])) + 1;

let grid = Array.from({ length: rows }, () => Array(cols).fill('#'));
selected.forEach(([y, x]) => {
  grid[y][x] = '.';
});

grid.reverse().forEach(row => {
  console.log(row.join(''));
});

function rotate(direction) {
  if (direction === "R") {
    if (currentDirection === "s") currentDirection = "w";
    else if (currentDirection === "w") currentDirection = "n";
    else if (currentDirection === "n") currentDirection = "e";
    else if (currentDirection === "e") currentDirection = "s";
  } else if (direction === "L") {
    if (currentDirection === "s") currentDirection = "e";
    else if (currentDirection === "e") currentDirection = "n";
    else if (currentDirection === "n") currentDirection = "w";
    else if (currentDirection === "w") currentDirection = "s";
  }
}

function walk() {
  if (currentDirection === "s") {
    currentY -= 1;
  } else if (currentDirection === "w") {
    currentX -= 1;
  } else if (currentDirection === "n") {
    currentY += 1;
  } else if (currentDirection === "e") {
    currentX += 1;
  }
  selected.push([currentY, currentX]);
}
