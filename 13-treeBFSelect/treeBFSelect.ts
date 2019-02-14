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

type Filter = (value?: number | boolean, depth?: number) => boolean;

interface ITree {
  children: Tree[];
  value: number | boolean;
  depth: number;

  BFSelect: (filter: Filter) => void;
  addChild: (tree: number) => void;
}

class Tree implements ITree {
  public children: Tree[];
  public value: number | boolean;
  public depth: number;

  constructor(value: number | boolean) {
    this.children = [];
    this.value = value;
    this.depth = 0;
  }

  addChild(child: number | boolean): void {
    const childTree = new Tree(child);
    childTree.depth = this.depth + 1;
    this.children.push(childTree);
  }

  BFSelect(filter?: Filter): number[] {
    let result: number[] = [];

    if (filter(this.value, this.depth)) {
      result.push(this.value as number);
    }

    for (const child of this.children) {
      result = result.concat(child.BFSelect(filter));
    }

    return result;
  }
}
