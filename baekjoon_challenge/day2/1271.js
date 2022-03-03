/*
    1271 - 엄청난 부자2
*/

const fs = require("fs");
let input = fs.readFileSync("./1271.txt").toString().split(" ");
let totalmoney = +input[0];
let beggers = +input[1];

let money = parseInt(totalmoney / beggers);
let change = totalmoney % beggers;

console.log(money);
console.log(change);

// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split(" ");
// let totalmoney = +input[0];
// let beggers = +input[1];

// let money = parseInt(totalmoney / beggers);
// let change = totalmoney % beggers;

// console.log(money);
// console.log(change);
