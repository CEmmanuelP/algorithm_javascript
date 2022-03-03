/*
    3003 - 킹, 퀸, 룩, 비숍, 나이트, 폰

*/

const fs = require("fs");
let input = fs.readFileSync("./3003.txt").toString().split(" ");
let compareArray = [1, 1, 2, 2, 2, 8];
let answerArray = [];
let answer;
// 1 1 2 2 2 8
console.log(input);

for (let i = 0; i < input.length; i++) {
    answerArray.push(compareArray[i] - input[i]);
}

answer = answerArray.join(" ");

console.log(answer);
