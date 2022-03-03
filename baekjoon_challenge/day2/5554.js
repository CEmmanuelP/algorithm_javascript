/*
    5554 - 파티가 끝나고 난 뒤
*/

const fs = require("fs");
let input = fs.readFileSync("./5554.txt").toString().split("\r\n");
let sum = 0;
let minutes,
    seconds = 0;

for (let i = 0; i < input.length; i++) {
    sum += +input[i];
}

minutes = parseInt(sum / 60);
seconds = sum % 60;

console.log(minutes);
console.log(seconds);
