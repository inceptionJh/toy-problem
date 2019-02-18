"use strict";
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
    let likeEnum = [];
    array.forEach((v, i) => {
        likeEnum[i] = [i, v];
    });
    while (likeEnum.length) {
        const mid = Math.floor(likeEnum.length / 2);
        if (likeEnum[mid][1] === target) {
            return likeEnum[mid][0];
        }
        likeEnum = likeEnum[mid][1] > target ? likeEnum.slice(0, mid) : likeEnum.slice(mid + 1, likeEnum.length);
    }
};
//# sourceMappingURL=binarySearchArray.js.map