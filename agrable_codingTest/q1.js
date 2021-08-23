function solution(initdb, mindb, maxdb, commands) {
  var answer = [];

  for (let command of commands) {
    console.log(command);
    if (command[0] === 0) {
      initdb =
        initdb + 10 * Math.log10(command[1]) <= maxdb
          ? initdb + 10 * Math.log10(command[1])
          : maxdb;
      answer.push(initdb);
      console.log(initdb);
    } else if (command[0] === 1) {
      initdb =
        initdb - 10 * Math.log10(command[1]) >= mindb
          ? initdb - 10 * Math.log10(command[1])
          : mindb;
      answer.push(initdb);
      console.log(initdb);
    } else if (command[0] === 2) {
      initdb = initdb + command[1] <= maxdb ? initdb + command[1] : maxdb;
      answer.push(initdb);
      console.log(initdb);
    } else if (command[0] === 3) {
      initdb = initdb - command[1] >= mindb ? initdb - command[1] : mindb;
      answer.push(initdb);
      console.log(initdb);
    }
  }

  return answer;
}

// 볼륨 100배 높이기
// 볼륨 10배 낮추기
// 데시벨 40 높이기
// 데시벨 20 낮추기
let command = [
  [0, 100],
  [1, 10],
  [2, 40],
  [3, 20],
];
console.log(solution(50, 10, 85, command));
