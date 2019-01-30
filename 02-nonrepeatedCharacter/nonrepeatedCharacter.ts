var firstNonRepeatedCharacter = function(string: string) {
  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] !== string[i + 1]) {
      return string[i + 1];
    }
  }

  return null;
};
