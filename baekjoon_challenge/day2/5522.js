/*
    5522 - 카드 게임
*/

const fs = require("fs");
let input = fs.readFileSync("./5522.txt").toString().split("\r\n");
let answer = 0;

input.map((e) => {
    answer += +e;
});

console.log(answer);
