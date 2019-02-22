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

type InfoOfChar = {
  startIdx: number;
  endIdx: number;
};

type InfoOfChars = {
  [char: string]: {
    startIdx: number;
    endIdx: number;
  };
};

class Extracter {
  public string: string;

  public constructor(string: string) {
    this.string = string;
  }

  public getCharInfos(): InfoOfChars {
    const charInfos: InfoOfChars = {};

    for (let i = 0; i < this.string.length; i++) {
      if (this.string[i] !== this.string[i - 1]) {
        charInfos[this.string[i]] = { startIdx: i, endIdx: i };
        continue;
      }

      charInfos[this.string[i]].endIdx = i;
    }

    return charInfos;
  }

  public getLongestChar(): [number, number] {
    const charInfos: InfoOfChars = this.getCharInfos();

    let result: [number, number] | undefined;

    for (let key in charInfos) {
      if (result === undefined) result = [charInfos[key].startIdx, charInfos[key].endIdx];

      const currentMaxLen = result[1] - result[0] + 1;
      const nextMaxLen = charInfos[key].endIdx - charInfos[key].startIdx + 1;

      result = currentMaxLen >= nextMaxLen ? result : [charInfos[key].startIdx, charInfos[key].endIdx];
    }

    return result === undefined ? [0, 0] : result;
  }
}

const longestRun = function(string: string): [number, number] {
  const extracter = new Extracter(string);
  const lengestChar = extracter.getLongestChar();

  return lengestChar;
};
