/*
    2920 - 음계
*/

const fs = require("fs");
let input = fs.readFileSync("./2920.txt").toString().trim().split(" ");
let tmp, answer;

for (let i = 0; i < input.length - 1; i++) {
    tmp = +input[i] - +input[i + 1];
    if (tmp === 1) {
        continue;
    } else if (tmp === -1) {
        continue;
    } else {
        answer = "mixed";
        break;
    }
}

if (!answer) {
    if (tmp === 1) {
        answer = "descending";
    } else if (tmp === -1) {
        answer = "ascending";
    }
}

console.log(answer);
