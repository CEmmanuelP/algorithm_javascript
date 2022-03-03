/*
    1550 - 16진수

    -- 특정 진수의 값으로 변경
    parseInt(var, 진수)

*/

const fs = require("fs");
const input = fs.readFileSync("./1550.txt").toString();

let answer = parseInt(input, 16);

console.log(answer);
