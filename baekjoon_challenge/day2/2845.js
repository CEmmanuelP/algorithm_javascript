/*
    2845 - 파티가 끝나고 난 뒤

    split("\r\n")로 문자열 분리를 하니 런타임 에러
    split("\n")은 정답 인정
*/

const fs = require("fs");
let input = fs.readFileSync("./2845.txt").toString();
let answer = [];

input = input.split("\r\n");

let fact = input[0].split(" ");
let others = input[1].split(" ");

let l = +fact[0];
let p = +fact[1];

let people = l * p;

for (let i = 0; i < others.length; i++) {
    answer.push(others[i] - people);
}

let a = answer.join(" ");

console.log(a);
