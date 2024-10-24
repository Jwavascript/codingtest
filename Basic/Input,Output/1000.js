const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

let input = []
rl.on("line",(line)=>{
    input = line.split(' ');
    rl.close();
});

let sum = 0;

rl.on('close', ()=>{
    input.forEach(el=>{
        sum += Number(el);

    })
    console.log(sum);

})

