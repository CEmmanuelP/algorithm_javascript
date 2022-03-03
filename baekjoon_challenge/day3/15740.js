/*
    15940 - A + B - 9
*/

const fs = require("fs");
let input = fs.readFileSync("./15740.txt").toString().trim().split(" ");

let bigInt = input.map(BigInt);

let answer = bigInt[0] + bigInt[1];

console.log(answer.toString());
