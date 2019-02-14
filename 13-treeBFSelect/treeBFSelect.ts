/**
 *
 * Implement a `BFSelect` method on this Tree class.
 *
 * BFSelect accepts a filter function, calls that function on each of the nodes
 * in Breadth First order, and returns a flat array of node values of the tree
 * for which the filter returns true.
 *
 * Example:
 *   var root1 = new Tree(1);
 *   var branch2 = root1.addChild(2);
 *   var branch3 = root1.addChild(3);
 *   var leaf4 = branch2.addChild(4);
 *   var leaf5 = branch2.addChild(5);
 *   var leaf6 = branch3.addChild(6);
 *   var leaf7 = branch3.addChild(7);
 *   root1.BFSelect(function (value, depth) {
 *     return value % 2;
 *   })
 *   // [1, 3, 5, 7]
 *
 *   root1.BFSelect(function (value, depth) {
 *     return depth === 1;
 *   })
 *   // [2, 3]
 *
 */

class Tree {
  value: number;
  children: Tree[];
  depth: number;

  constructor(value: number) {
    this.value = value;
    this.children = [];
    this.depth = 0;
  }

  BFSelect(filter: Function) {
    function pushFiltedChild(children: Tree[]) {
      for (let child of children) {
        if (filter(child.value, child.depth)) {
          selectedChild.push(child.value);
        }

        pushFiltedChild(child.children);
      }
    }

    const selectedChild = filter(this.value, this.depth) ? [this.value] : [];
    pushFiltedChild(this.children);
    return selectedChild;
  }

  addChild(child: Tree) {
    if (this.isDescendant(child)) {
      throw new Error("That child is already a child of this tree");
    }

    this.children.push(child);
    child.depth = this.depth + 1;
    return child;
  }

  isDescendant(child: Tree) {
    if (this.children.indexOf(child) !== -1) {
      return true;
    }

    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        return true;
      }
    }

    return false;
  }

  removeChild(child: Tree) {
    var index = this.children.indexOf(child);

    if (index === -1) {
      throw new Error("That node is not an immediate child of this tree");
    }

    this.children.splice(index, 1);
  }
}
