/*
    1157 - 단어 공부
*/

const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let input = fs.readFileSync("./1157.txt").toString().trim().toUpperCase();
const charMap = {};

for (let char of input) {
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
}

// 최댓값
// apply 사용시 전역변수에 배열을 넣어 math.max함수 적용가능
// Object.values() -> 객체의 value를 배열로 리턴
let max = Math.max.apply(null, Object.values(charMap));
let maxChar = "";
let counter = 0;
for (let char in charMap) {
    console.log(char);
    if (charMap[char] === max) {
        console.log(`maxChar : ${maxChar} / char : ${char} / max : ${max}`);
        maxChar = char;
        counter++;
    }
    if (counter > 1) {
        console.log("?");
        return;
    }
}

console.log(maxChar);
