/*
    2438 - 별 찍기
*/

const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let input = fs.readFileSync("./input.txt").toString();

let c = +input;

for (let i = 0; i < c; i++) {
    let arr = "";

    for (let k = c - i - 1; k > 0; k--) {
        arr += " ";
    }

    for (let j = 0; j <= i; j++) {
        arr += "*";
    }

    console.log(arr);
}
