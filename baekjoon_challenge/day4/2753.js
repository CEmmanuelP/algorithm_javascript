/*
    2753 - 윤년

    * 윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.
   윤년이면 1, 아니면 0
*/

const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let input = fs.readFileSync("./input.txt").toString();

let year = +input;
let answer = 0;

if (year % 4 === 0 && year % 100 !== 0) {
    answer = 1;
} else if (year % 400 === 0) {
    answer = 1;
} else {
    answer = 0;
}

console.log(answer);
