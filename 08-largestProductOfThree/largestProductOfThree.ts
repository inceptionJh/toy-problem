const largestProductOfThree = function(arr: number[]): number {
  let largestProduct = arr[0] * arr[1] * arr[2];

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        const willCompareNumber = arr[i] * arr[j] * arr[k];
        if (willCompareNumber > largestProduct) {
          largestProduct = willCompareNumber;
        }
      }
    }
  }

  return largestProduct;
};

largestProductOfThree([2, 3, -11, 7, 5, -13]);
