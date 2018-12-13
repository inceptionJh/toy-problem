/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

/**
 * @param {String} string
 */
function longestRun(string) {
  if(string.length === 0) return [0, 0];
  /**
   * ### example  
   * - string: "aaabbc"
   *```js
    {
        a: 3,
        b: 2,
        c: 1
    }
    ```
   */
  const charLengths = {};

  // make charLengths content
  for (let idx = 0; idx < string.length; idx++) {
    const char = string[idx];

    if (charLengths.hasOwnProperty(char)) {
      charLengths[char] += 1;
    } else {
      charLengths[char] = 1;
    }
  }

  // find longest char
  let maxChar = { char: "", length: 0 };

  for (let char in charLengths) {
    const lengthOfChar = charLengths[char];

    maxChar =
      maxChar.length >= lengthOfChar
        ? maxChar
        : { char, length: charLengths[char] };
  }

  const startIdx = string.indexOf(maxChar.char);
  return [startIdx, startIdx+maxChar.length-1];
}

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function(len) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
