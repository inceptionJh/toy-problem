"use strict";
class Tree {
    constructor(value) {
        this.children = [];
        this.value = value;
        this.depth = 0;
    }
    addChild(child) {
        const childTree = new Tree(child);
        childTree.depth = this.depth + 1;
        this.children.push(childTree);
    }
    BFSelect(filter) {
        let result = [];
        if (filter(this.value, this.depth)) {
            result.push(this.value);
        }
        for (const child of this.children) {
            result = result.concat(child.BFSelect(filter));
        }
        return result;
    }
}
//# sourceMappingURL=treeBFSelect.js.map