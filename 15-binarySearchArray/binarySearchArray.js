/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */


var binarySearch = function (array, target, originalMidIdx=Math.floor(array.length/2)) {
  let midIdx = Math.floor(array.length / 2);
  
  if(array[midIdx] === target) {
    return originalMidIdx;
  }
  
  if(array[midIdx] < target) {
    const newArr = array.slice(midIdx + 1, array.length);
    return binarySearch(newArr, target, originalMidIdx+midIdx);
  }
  
  if(array[midIdx] > target) {
    const newArr = array.slice(0, midIdx);
    return binarySearch(newArr, target, originalMidIdx-midIdx);
  }
};

const result = binarySearch([1, 2, 3, 4, 5], 2);

console.log(result);