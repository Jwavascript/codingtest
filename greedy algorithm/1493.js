let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

// len, wid, hei : The size of the box needs to be filled
const values = input[0].split(' ');
const [len, wid, hei] = values.map(Number);

// n : number of types of cubes
const n = Number(input[1]);
let maxinnerbox = 0;
// boxCounts : stores length and number of box
const boxCounts = Array(20).fill(0);
for(let i = 0; i<n; i++){

  const line = input[i+2].split(' ');
  const size = parseInt(line[0]);
  const count = parseInt(line[1]);
  if(i==n-1){
    maxinnerbox = size;
  }
  boxCounts[size] = count;
}

// innermaxsize : return the size of the largest cube that can fit in a given overall box size
function innermaxsize(len, wid, hei) {
  let innerbox = 0;
  let minbox = Math.min(len, wid, hei);
  while (minbox > 1) {
    innerbox++;
    minbox = parseInt(minbox / 2);
  }
  return innerbox;
}
//ablemaxsize : the largest cube size in a given box
let ablemaxsize = Math.min(innermaxsize(len, wid, hei), maxinnerbox);

// lowersize*8 = biggersize
// curbasebox : Usage based on the current box size
// usedbox : Usage not divided by the current standard
let curbasebox = 0;
let usedbox = 0;

for(i=ablemaxsize; i>=0; i--){
  curbasebox*=8;
  let ableboxx = parseInt(len/(2**(i)));
  let ableboxy= parseInt(wid/(2**(i)));
  let ableboxz = parseInt(hei/(2**(i)));
  let ablebox = ableboxx* ableboxy* ableboxz -curbasebox;
  let ablefitbox = Math.min(ablebox, boxCounts[i]);
  curbasebox +=ablefitbox;
  usedbox += ablefitbox;
}
if(curbasebox === len*wid*hei){
  console.log(usedbox);
}
else{
  console.log(-1);
}




