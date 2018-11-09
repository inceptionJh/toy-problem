var Tree = (
  class Tree {
    constructor(value) {
      this.value = value;
      this.children = [];
      this.depth = null;
    }

    addChildren(n) {
      this.depth = n;
      if (n > 0) {
        this.children = [new Tree("rock"), new Tree("paper"), new Tree("scissors")];
        this.children.forEach(child => { child.addChildren(n - 1) })
      }
    }

    logFromLastChildren(depth, temp, result) {
      if (this.depth !== depth) {
        temp[depth - this.depth - 1] = this.value;
      }

      if (this.depth === 0) {
        result.push(temp.slice());
      }

      this.children.forEach(child => {
        child.logFromLastChildren(depth, temp, result);
      })
    }
  }
)

var rockPaperScissors = function (number) {
  if (number === undefined) {
    const mainTree = new Tree(null);

    const depth = 3;
    mainTree.addChildren(depth);

    const result = [];
    let temp = Array(depth);
    mainTree.logFromLastChildren(depth, temp, result);
    return result;
  }
  else {
    const mainTree = new Tree(null);

    const depth = number;
    mainTree.addChildren(depth);

    const result = [];
    let temp = Array(depth);
    mainTree.logFromLastChildren(depth, temp, result);
    return result;
  }
};
