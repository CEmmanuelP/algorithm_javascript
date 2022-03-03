/*
    1008 - A/B
*/

const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let input = fs.readFileSync("./input.txt").toString().split(" ");

let h = +input[0];
let m = +input[1];
let newH = 0;
let newM = 0;

if (h === 0) {
    h = 24;
}

const alarm = (h, m) => {
    let total = h * 60 + m - 45;
    newH = parseInt(total / 60);
    newM = total % 60;
};

alarm(h, m);

if (newH === 24) {
    newH = 0;
}

console.log(`${newH} ${newM}`);
