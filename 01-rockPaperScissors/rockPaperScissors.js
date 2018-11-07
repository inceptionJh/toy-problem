const choices = ['rock', 'scissors', 'paper']
const test = []

var makeCases = function (n, arr) {

  if (n !== 0) {
    for (let choice of choices) {
      makeCases(--n, arr.concat(choice))
    }
  }
  else {
    test.push(arr)    
  }

}

var rockPaperScissors = function (number) {

  const cases = []

  if (number === undefined) {
    for (let choice1 of choices) {
      for (let choice2 of choices) {
        for (let choice3 of choices) {
          cases.push([choice1, choice2, choice3])
        }
      }
    }
  }
  else if (typeof number === 'number' && number > 0) {
    return makeCases(number, [])
  }

  return cases
};
