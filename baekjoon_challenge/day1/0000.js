/* 
    js로 백준 문제풀이 환경 만드는 법
*/

const fs = require("fs");

let input = fs.readFileSync("./input.txt").toString();
console.log(input);
input = input.split("\n");

const testCaseNum = +input[0];

for (let i = 1; i <= testCaseNum; ++i) {
    const arr = input[i].split(" ").map((item) => +item);
    // let newArr = [];
    // for (let i = 0; i < arr.length; ++i) {
    //     newArr.push(+arr[i]);
    // }

    console.log("arr : ", arr);
    // console.log("newArr : ", newArr);

    break;

    let totalSum = 0;
    const arrLength = arr[0];
}

// 입력값만 따로 떼와서 받기

/*

내가 받고 싶은 값과 값의 형태를 먼저 적어본다
C = 5
testCase = [
    {
        N: 5,
        arr: [50, 50, 70, 80, 100]
    },
    {
        n: 7,
        arr: [100 95 90 80 70 60 50]
    }
    ...
]

*/
function solution(C, testCase) {}
