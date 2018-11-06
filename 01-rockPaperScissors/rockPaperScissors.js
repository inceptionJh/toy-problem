/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (number) {
  var makeCases = function(n) {
    if(n>0) {
      cases.push()
      makeCases(--n)
    }
  }

  const choices = ['rock', 'scissors', 'paper']
  const cases = []

  if(number === undefined) {
    for (let choice1 of choices) {
      for(let choice2 of choices) {
        for(let choice3 of choices) {
          cases.push([choice1, choice2, choice3])
        }
      }
    }
  }
  else if(typeof number === 'number' && number > 0) {
    for(let choice of choices) {
      makeCases(number)
    }
  }

  return cases
};
