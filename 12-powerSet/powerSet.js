"use strict";
/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * ->  ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */
const getChars = function (str, n) {
    const chars = [];
    if (n > 0) {
        for (let i = n; i < str.length; i++) {
            chars.push(str[i]);
            getChars(str, n);
        }
    }
    return chars;
};
const powerSet = function (str) {
    const result = [];
    for (let i = 0; i < str.length; i++) {
        const chars = getChars(str, i);
        result.concat(chars);
    }
    return result;
};
//# sourceMappingURL=powerSet.js.map