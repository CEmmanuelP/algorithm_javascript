// forEach, map, filter, reduce -> 고차함수: 자신의 매개변수에 함수를 전달받는 것

function forEach(predicate, thisArg) {
  for (let i = 0; i < a.length; i++) {
    predicate(a[i], i);
  }
}

function map(predicate, thisArg) {
  let list = [];
  for (let i = 0; i < a.length; i++) {
    list.push(predicate(a[i], i));
  }
  return list;
}

function filter(predicate, thisArg) {
  let list = [];
  for (let i = 0; i < a.length; i++) {
    if (predicate(a[i], i)) list.push(a[i]);
  }

  return list;
}

function reducer(predicate, value) {
  let result = value;
  for (let i = 0; i < a.length; i++) {
    result = predicate(result, a[i]);
  }

  return result;
}

a = [10, 11, 12, 13, 14, 15];

a.forEach(
  function (v, i) {
    console.log(v, i, this);
  },
  [1, 2]
);

// 원본 배열과 길이가 항상 같다
let answer = a.map(
  function (v, i) {
    return v * v;
  },
  [1, 2]
);

answer = a.filter(
  function (v, i) {
    return v % 2 === 0;
  },
  [1, 2]
);

answer = a.reduce(function (acc, v) {
  return acc + v;
}, 0);
