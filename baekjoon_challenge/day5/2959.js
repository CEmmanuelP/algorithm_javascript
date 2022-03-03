/*
    2959 - 거북이
*/

const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let input = fs.readFileSync("./input.txt").toString().split(" ");

const arr = input.sort(function (a, b) {
    return a - b;
});

const x = +arr[0];
const y = +arr[2];

console.log(x * y);
