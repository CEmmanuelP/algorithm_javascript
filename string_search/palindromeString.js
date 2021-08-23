function solution(s) {
  let answer = "YES";
  let word = s.toLowerCase();

  if (word.split("").reverse().join("") !== word) answer = "NO";

  return answer;
}

let str = "gooGoog";
console.log(solution(str));
