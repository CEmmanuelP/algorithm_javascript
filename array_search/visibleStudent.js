function solution(arr) {
  let answer = 1,
    max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      answer++;
      max = arr[i];
      console.log(max);
    }
  }

  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
