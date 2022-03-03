/*
    13771 - Presents
*/

const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let input = fs.readFileSync("./input.txt").toString().split(" ");

const testCaseNum = input;

const arr = input.sort(function (a, b) {
    return a - b;
});

let newArr = arr.join(" ");

console.log(newArr);

// arr.forEach((e) => {
//     console.log(e);
// });
