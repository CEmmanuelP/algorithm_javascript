/*
    2741 - N 찍기

    바로 찍었더니 시간초과남

    한꺼번에 찍도록
*/

const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let input = fs.readFileSync("./input.txt").toString();

let a = +input;
let answer = "";

// 시간초과
// for (let i = a; i > 0; i--) {
//     console.log(i);
// }

for (let i = a; i > 0; i--) {
    answer += i + "\n";
}

console.log(answer);
