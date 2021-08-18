function solution(s) {
  let answer = s;
  answer = s.replace(/A/g, "#");

  return answer;
}
let str = "BANANA";
console.log(solution(str));
