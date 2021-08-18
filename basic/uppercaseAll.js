function solution(str) {
  let answer = "";

  for (let x of str) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += String.fromCharCode(num + 32);
  }

  return answer;
}
let str = "KoreaTimeGood";
console.log(solution(str));
