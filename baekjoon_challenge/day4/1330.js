/*
    1008 - 두 수 비교하기
*/

const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let input = fs.readFileSync("./input.txt").toString().split(" ");

let a = +input[0];
let b = +input[1];

const compare = (a, b) => {
    if (a < b) {
        return "<";
    } else if (a > b) {
        return ">";
    } else {
        return "==";
    }
};

console.log(compare(a, b));
