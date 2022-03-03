/*
    1008 - A/B
*/

const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let input = fs.readFileSync("./input.txt").toString().split(" ");

let a = +input[0];
let b = +input[1];

console.log(a / b);
