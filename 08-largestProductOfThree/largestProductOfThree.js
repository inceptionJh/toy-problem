/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  const allCase = []
  const arrLen = array.length
  for (let i = 0; i < arrLen-2; i++)
    for (let j = i+1; j < arrLen-1; j++)
      for (let k = j+1; k < arrLen; k++)
        allCase.push(array[i]*array[j]*array[k])
  allCase.sort((a,b)=>b-a);
  return allCase[0];
}
