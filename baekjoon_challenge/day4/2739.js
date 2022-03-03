/*
    2739 - 구구단
*/

const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let input = fs.readFileSync("./input.txt").toString();

let a = +input;

for (let i = 1; i <= 9; i++) {
    console.log(`${a} * ${i} = ${a * i}`);
}
