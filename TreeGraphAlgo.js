// Validate a binary tree is balanced.
// A binary tree is balanced if the difference between the depths of any two leaf nodes
// is no greater than one.

// Recursive Solution
function isTreeBalanced (tree) {
  return (getHeightBalance(tree.root) > 1);

  function getHeightBalance (node) {
    if (!node) return 0;

    const hLeft = getHeightBalance(node.left);
    const hRight = getHeightBalance(node.right);

    if (hLeft === -1 || hRight === -1) return -1;
    if (Math.abs(hLeft - hRight) > 1) return -1;

    if (hLeft > hRight) return hLeft + 1;
    return hRight + 1;
  }
}
