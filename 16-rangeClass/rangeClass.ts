/**
 * Build a class to represent a range of numbers that takes:
 *   - a beginning index,
 *   - an end index (optional)
 *     If there is no end index, the range should include only the passed-in start value.
 *   - a 'step' (optional)
 *     The step is the interval at which elements are included.
 *     For instance, a step of 1 includes every element in the range,
 *     while a step of 2 includes every other element.
 *
 * The range should have a constructor that accepts these arguments in that order.
 *
 * It should also support the following utility functions:
 *   - size(): return the number of items represented by the range
 *   - each(callback(index)): iterate over the range, passing each value to a callback function
 *   - includes(index): return whether or not the range includes the passed value
 *
 * You should also be aware of the following caveats:
 *   - You should allow a negative value for 'step' to count backwards.
 *   - If no step is provided, it should default to 1.
 *   - If the start value is greater than the end value, assume we're counting backwards.
 *   - Should return null if we are given no 'start' value.
 *
 * Range should use constant space, even during the `each` method. i.e. you should *not*
 * use an Array as backing storage. Any given range could potentially be thousands of numbers long,
 * so find a way to represent the range without actually storing each element.
 *
 * USAGE EXAMPLES:
 * var myRange = new Range(0,10); // a new range representing the numbers between 0 and 10 (inclusively)
 *
 * var evenNumbers = new Range(2,8,2); // A range with the even numbers 2, 4, 6, and 8.
 * evenNumbers.each(function(val){
 *   console.log(val+"!");
 * });
 * console.log("Who do we appreciate!?");
 *
 * evenNumbers.size() should be 4
 * evenNumbers.includes(2) should be true, evenNumbers.includes(3) should be false
 */

class _ArrLike {
  [index: number]: number;
  length: number;

  constructor() {
    this.length = 0;
    Object.defineProperty(this, "length", { value: 0, enumerable: false });
  }

  push(value: number) {
    this[this.length] = value;
    this.length++;
  }
}

class _Range {
  public structure: _ArrLike;

  public constructor(private startOrRange: number, private end?: number, private step?: number) {
    this.structure = new _ArrLike();

    if (end === undefined) {
      for (let i = 0; i < startOrRange; i++) {
        this.structure.push(i + 1);
      }
    }

    if (end !== undefined) {
      const start = startOrRange;
      end > start ? this.setIncreasingRangeStructure() : this.setDecreasingRangeStructure();
    }
  }

  public size() {
    return this.structure.length;
  }

  public each(callback: Function) {
    for (let i = 0; i < this.structure.length; i++) {
      callback(this.structure[i]);
    }
  }

  public includes(value: number) {
    for (let i = 0; i < this.structure.length; i++) {
      if (this.structure[i] === value) {
        return true;
      }
    }

    return false;
  }

  private setIncreasingRangeStructure(): void {
    const start: number = this.startOrRange;
    const end: number = this.end as number;
    const step: number = this.step === undefined ? 1 : this.step;

    const structureLength = Math.floor((end - start) / step + 1);
    for (let i = 0; i < structureLength; i++) {
      const value = start + i * step;
      this.structure.push(value);
    }
  }

  private setDecreasingRangeStructure(): void {
    const start: number = this.startOrRange;
    const end: number = this.end as number;
    const step: number = this.step === undefined ? -1 : this.step;

    const structureLength = Math.floor((start - end) / -step + 1);
    for (let i = 0; i < structureLength; i++) {
      const value = start + i * step;
      this.structure.push(value);
    }
  }
}
