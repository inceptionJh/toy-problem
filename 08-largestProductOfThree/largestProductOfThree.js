"use strict";
var largestProductOfThree = function (arr) {
    var largestProduct = arr[0] * arr[1] * arr[2];
    for (var i = 0; i < arr.length - 2; i++) {
        for (var j = i + 1; j < arr.length - 1; j++) {
            for (var k = j + 1; k < arr.length; k++) {
                var willCompareNumber = arr[i] * arr[j] * arr[k];
                if (willCompareNumber > largestProduct) {
                    largestProduct = willCompareNumber;
                }
            }
        }
    }
    return largestProduct;
};
largestProductOfThree([2, 3, -11, 7, 5, -13]);
//# sourceMappingURL=largestProductOfThree.js.map