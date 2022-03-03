const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const arr = [];

for (let i = 0; i < input.length; i++) {
    arr.push(parseInt(input[i], 10));
}

const a = arr[0];
const b = arr[1];

console.log(a * b);
