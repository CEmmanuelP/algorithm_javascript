function solution(str) {
  let answer = "";

  for (let x of str) {
    if (!isNaN(x)) answer = answer * 10 + Number(x);
  }

  return answer;
}

let str = "g0e000n2T0s8eSoft";
console.log(solution(str));
