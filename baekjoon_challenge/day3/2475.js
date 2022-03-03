/*
    2475 - 검증수
*/

const fs = require("fs");
let input = fs.readFileSync("./2475.txt").toString().trim().split(" ");
let sum = 0;

for (let i = 0; i < input.length; i++) {
    sum += input[i] * input[i];
}

console.log(sum % 10);
