/*
    13771 - Presents
*/

const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let input = fs.readFileSync("./input.txt").toString().split("\r\n");

console.log(input);

const testCaseNum = input[0];

const costs = input.slice(1);

// let newCost = costs.map((item) => item.toFixed(2));

const arr = costs.sort(function (a, b) {
    return a - b;
});

console.log(arr);
console.log(arr[1]);

// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n").map((item) => +item);

// /*
// let input = fs
//     .readFileSync("./input.txt")
//     .toString()
//     .split("\r\n")
//     .map((item) => +item);
// */

// const testCaseNum = input[0];
// const costs = input.slice(1);

// const arr = costs.sort(function (a, b) {
//     return a - b;
// });

// console.log(arr[1]);
