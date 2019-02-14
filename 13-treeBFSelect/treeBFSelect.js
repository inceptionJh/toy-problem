"use strict";
class Tree {
    constructor(value) {
        this.value = value;
        this.children = [];
        this.depth = 0;
    }
    BFSelect(filter) {
        function pushFiltedChild(children) {
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
    addChild(child) {
        if (this.isDescendant(child)) {
            throw new Error("That child is already a child of this tree");
        }
        this.children.push(child);
        child.depth = this.depth + 1;
        return child;
    }
    isDescendant(child) {
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
    removeChild(child) {
        var index = this.children.indexOf(child);
        if (index === -1) {
            throw new Error("That node is not an immediate child of this tree");
        }
        this.children.splice(index, 1);
    }
}
//# sourceMappingURL=treeBFSelect.js.map