function solution(str) {
  let answer = "",
    max = Number.MIN_SAFE_INTEGER;

  for (let x of str) {
    if (max < x.length) {
      max = x.length;
      answer = x;
    }
  }

  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
