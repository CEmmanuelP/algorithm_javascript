/*
    2741 - N 찍기
*/

const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let input = fs.readFileSync("./input.txt").toString();

let a = +input;
let answer = "";

// 시간초과
// for (let i = 1; i <= a; i++) {
//     console.log(i);
// }

for (let i = 1; i <= a; i++) {
    answer += i + "\n";
}

console.log(answer);
