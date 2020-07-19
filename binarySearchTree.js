class BinarySearchTree {
  constructor () {
    this.root = null;
  }

  insert (value) {
    if (!this.root) {
      this.root = new Node(value);
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (!current.left) {
          current.left = new Node(value);
          return this;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = new Node(value);
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }
}

class Node {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(8);
tree.insert(12);
