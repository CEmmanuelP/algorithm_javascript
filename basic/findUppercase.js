function solution(str) {
  let answer = 0;

  for (let x of str) {
    if (x === x.toUpperCase()) answer++;
  }

  return answer;
}
let str = "KoreaTimeGood";
console.log(solution(str));
