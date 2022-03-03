/*
    2675 - 문자열 반복
*/

const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let input = fs.readFileSync("./2675.txt").toString().trim().split("\r\n");

const num1 = input.shift();

for (let i = 0; i < num1; i++) {
    let answer = "";

    const [num2, str] = input[i].split(" ");

    for (let j = 0; j < str.length; j++) {
        for (let c = 0; c < num2; c++) {
            answer += str[j];
        }
    }

    console.log(answer);
}

// const testCaseNum = +input[0];
// const textCase = [];

// console.log(testCaseNum);

// for (let i = 1; i <= testCaseNum; i++) {
//     const arr = input[i].split(" ");
//     console.log("arr : ", arr);
//     textCase.push(arr);
// }

// console.log(textCase);

// let c = +input[0];
// let p;
// if (input[1]) {
//     p = input[1].split("");
// }

// let answer = "";

// if (p) {
//     for (let i = 0; i < p.length; i++) {
//         for (let j = 0; j < c; j++) {
//             answer += p[i];
//         }
//     }
// }

// if (answer) {
//     console.log(answer);
// }
