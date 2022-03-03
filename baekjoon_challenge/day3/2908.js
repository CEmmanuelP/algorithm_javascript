/*
    2908 - 상수
*/

const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let input = fs.readFileSync("./2908.txt").toString().trim().split(" ");

let a = input[0];
let b = input[1];

a = a.split("");
b = b.split("");

const change = (array) => {
    let tmp = array[0];
    array[0] = array[2];
    array[2] = tmp;

    return array;
};

let changeA = +change(a).join("");
let changeB = +change(b).join("");

changeA > changeB ? console.log(changeA) : console.log(changeB);
