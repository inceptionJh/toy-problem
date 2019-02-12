/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function(
  rotated: number[],
  target: number,
  idx = Math.floor(rotated.length / 2)
): number | null {
  const mid = Math.floor(rotated.length / 2);

  if (rotated[mid] < target) {
    const nextRotated = rotated.slice(0, mid);
    const nextIdx = idx - (Math.floor(nextRotated.length / 2) + 1);

    return rotatedArraySearch(nextRotated, target, nextIdx);
  }

  if (rotated[mid] > target) {
    const nextRotated = rotated.slice(mid + 1, rotated.length);
    const nextIdx = idx + (Math.floor(nextRotated.length / 2) + 1);

    return rotatedArraySearch(nextRotated, target, nextIdx);
  }

  if (rotated[mid] === target) {
    return idx;
  }

  return null;
};

const result = rotatedArraySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 0);
console.log("result :", result);
console.log("end");

/**
 *
 * mid === Math.floor(rotated.length / 2)
 *
 * 1. rotated[mid]가 target보다 크면 0 ~ (mid - 1)에서 탐색하고 rotated[mid]가 target보다 작으면 (mid + 1) ~ (rotated.length/2 - 1)에서 탐색
 * 2. idx는 처음에는 mid와 같은 값을 가지고
 *    rotated[mid]가 target보다 크면 idx는 기존의 mid - (Math.floor(nextRotated.length/2) + 1)
 *    rotated[mid]가 target보다 작으면 idx는 기존의 mid + (Math.floor(nextRotated.length/2) + 1)
 */
