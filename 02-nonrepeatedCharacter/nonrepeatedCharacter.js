"use strict";
var firstNonRepeatedCharacter = function (string) {
    for (var i = 0; i < string.length - 1; i++) {
        if (string[i] !== string[i + 1]) {
            return string[i + 1];
        }
    }
    return null;
};
//# sourceMappingURL=nonrepeatedCharacter.js.map