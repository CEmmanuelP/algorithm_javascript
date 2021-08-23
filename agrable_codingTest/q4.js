function solution(n, jump) {
  let currentX = 1;
  let currentY = 1;
  let currentHead = 0;
  let currentBorder = 1;

  let holder = [];

  holder.push([currentX, currentY]);
  console.log(holder);

  while (true) {
    if (currentHead === 0) {
      while (currentY + 1 <= n - currentBorder + 1) {
        currentY += 1;
        holder.push([currentX, currentY]);
      }
      currentHead += 1;
    } else if (currentHead === 1) {
      while (currentX + 1 <= n - currentBorder + 1) {
        currentX += 1;
        holder.push([currentX, currentY]);
      }
      currentHead += 1;
    } else if (currentHead === 2) {
      while (currentY - 1 >= currentBorder) {
        currentY -= 1;
        holder.push([currentX, currentY]);
      }
      currentHead += 1;
    } else if (currentHead === 3) {
      while (currentX - 1 >= currentBorder + 1) {
        currentX -= 1;
        holder.push([currentX, currentY]);
      }
      currentBorder += 1;
      currentHead = 0;
    }

    if (currentBorder > parseInt((n + 1) / 2)) {
      break;
    }
  }

  while (Array.isArray(holder) && holder.length && holder.length !== 1) {
    holder.shift();
    for (let i = 1; i < jump; i++) {
      holder.push(holder.shift());
    }
  }

  return holder[0];
}

console.log(solution(3, 10));
