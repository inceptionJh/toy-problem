/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that both
 * arrays will contain only strings.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain any value,
 * including non-strings.
*/

Array.prototype.isSubsetOf = function (array) {
  // Your code here
  // for(let v of this) {
  //   if(!array.includes(v)) {
  //     return false;
  //   }
  // }

  // return true;
  const arrayToObj = arr => {
    const obj = {};
    arr.forEach(v => { obj[v] = v });
    return obj;
  }

  const thisObj = arrayToObj(this);
  const paramObj = arrayToObj(array);


  for (let key in thisObj) {
    if (!(key in paramObj)) {
      return false;
    }
  }


  return true;
};
