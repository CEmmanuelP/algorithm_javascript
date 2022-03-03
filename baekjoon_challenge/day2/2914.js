const fs = require("fs");
const input = fs.readFileSync("./2914.txt").toString().split(" ");

console.log(input);

let song = +input[0];
let people = +input[1];

let melody = (people - 1) * song + 1;

console.log(melody);
