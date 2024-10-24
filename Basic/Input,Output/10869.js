const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", (data)=>{
    input = data.split(' ');
    rl.close();
})

rl.on('close', ()=>{
    a = parseInt(input[0]);
    b = parseInt(input[1]);

    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(parseInt(a/b));
    console.log(a%b);

})