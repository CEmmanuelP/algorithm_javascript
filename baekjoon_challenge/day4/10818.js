/*
    10818 - N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.
*/

const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let input = fs.readFileSync("./input.txt").toString().split("\r\n");

const arr = input[1].split(" ").map((item) => +item);

const sortedArr = arr.sort(function (a, b) {
    return a - b;
});

console.log(`${sortedArr[0]} ${sortedArr[sortedArr.length - 1]}`);
