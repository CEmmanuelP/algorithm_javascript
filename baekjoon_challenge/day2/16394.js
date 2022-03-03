/*
    16394 - 홍익대학교
*/
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const schoolBirthday = 1946;
console.log(Number(input) - schoolBirthday);
