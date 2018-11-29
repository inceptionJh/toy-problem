/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */


var binarySearch = function (array, target) {
  let low = 0;
  let high = array.length - 1;
  
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    
    if(array[mid] > target) {
      high = mid - 1;
    }
    
    if(array[mid] < target) {
      low = mid + 1;
    }
    
    if(array[mid] === target) {
      return mid;
    }

  }
};
