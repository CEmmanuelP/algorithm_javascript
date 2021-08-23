const left = (heights, buildingIndex) => {
  if (buildingIndex === 0) {
    return 0;
  }

  let currentMax = heights[buildingIndex];
  let sum = 0;
  let flag = true;

  for (let i = buildingIndex - 1; i >= 0; i--) {
    if (heights[i] > currentMax) {
      currentMax = heights[i];
      flag = !flag;
      sum += 1;
    } else if (flag && heights[i] === currentMax) {
      flag = !flag;
      sum += 1;
    }
  }
  return sum;
};

const right = (heights, buildingIndex) => {
  if (buildingIndex === heights.length - 1) {
    return 0;
  }

  let currentMax = heights[buildingIndex];
  let sum = 0;
  let flag = true;

  for (let i = buildingIndex + 1; i < heights.length; i++) {
    if (heights[i] > currentMax) {
      currentMax = heights[i];
      flag = !flag;
      sum += 1;
    } else if (flag && heights[i] === currentMax) {
      flag = !flag;
      sum += 1;
    }
  }

  return sum;
};

const solution = (heights) => {
  let sum = 0;
  for (let i = 0; i < heights.length; i++) {
    sum += left(heights, i);
    sum += right(heights, i);
  }

  return sum;
};

console.log(solution([1, 4, 2, 5, 3]));
