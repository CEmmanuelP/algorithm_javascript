/*
    15964 - 이상한 기호

    (a+b) 
*/

const fs = require("fs");
let input = fs.readFileSync("./15964.txt").toString().trim().split(" ");

let a = +input[0];
let b = +input[1];

console.log((a + b) * (a - b));
