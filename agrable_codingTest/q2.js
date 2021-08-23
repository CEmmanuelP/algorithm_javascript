function solution(deposits) {
  var answer = 0;

  for (let x of deposits) {
    console.log(x);
    let data = x.split(" ");

    let per = +data[1] / 100;
    let principal = +data[2];
    let interest = principal * per;

    let days = getDaysFromDate(data[0]);
    let interestDetermined = Math.floor((interest * days) / 365);

    answer += principal + interestDetermined;
  }

  return answer;
}

const getDaysFromDate = (date) => {
  let newDate = date.split("/");
  let days = 0;

  switch (+newDate[0]) {
    case 1:
      days += 31;
    case 2:
      days += 28;
    case 3:
      days += 31;
    case 4:
      days += 30;
    case 5:
      days += 31;
    case 6:
      days += 30;
    case 7:
      days += 31;
    case 8:
      days += 31;
    case 9:
      days += 30;
    case 10:
      days += 31;
    case 11:
      days += 30;
    case 12:
      days += 30;
    default:
      days -= +newDate[1] - 1;
  }

  return days;
};

let deposit = [
  "01/01 2 50000",
  "01/03 1 999",
  "01/31 9 10000",
  "02/05 5 6547",
  "02/05 6 1",
  "06/30 5 5000",
  "10/15 5 2529",
  "12/30 4 10000",
];
let deposit2 = ["03/01 5 15000", "05/15 2 9527", "11/30 9 10000"];
console.log(solution(deposit));
