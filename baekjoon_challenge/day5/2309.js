/*
    2309 - 일곱난장이

    일곱 난쟁이의 키의 합이 100
*/

const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let input = fs
    .readFileSync("./input.txt")
    .toString()
    .split("\r\n")
    .map((item) => +item);

let arr;

console.log(input);

for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
        if (
            input.reduce((sum, item) => sum + item, 0) ===
            input[i] + input[j] + 100
        ) {
        }
    }
}

// const arr = input.sort(function (a, b) {
//     return a - b;
// });

// console.log(arr);
