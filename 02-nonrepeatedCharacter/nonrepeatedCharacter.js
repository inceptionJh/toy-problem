var firstNonRepeatedCharacter = function(string) {
  if(string === null) {
    return null;
  }

  var characterInfo = {};

  for(var i=0; i<string.length; i++) {
    characterInfo[string[i]] = characterInfo[string[i]] ? ++characterInfo[string[i]] : 1;
  }

  for(var key in characterInfo) {
    if(characterInfo[key] === 1) {
      return key;
    }
  }

  return null;
};
