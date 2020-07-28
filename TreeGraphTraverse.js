// Breadth-First-Search (BFS) - ITERATIVE
function BFS (node) {
  const result = [];
  const queue = [];
  let currentNode = node;
  
  queue.push(node);
  
  while (queue.length) {
    currentNode = queue.shift();
    result.push(currentNode);
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }
  
  return result;
}

// Depth-First-Search (DFS) - RECURSIVELY
function DFS (rootNode) {
  const result = [];
  
  // PreOrder variant
  function traverse (node) {
      result.push(node); // (1)
      if (node.left) traverse(node.left); // (2)
      if (node.right) traverse(node.right); // (3)
  }
  
  traverse(rootNode);
  return result;
}

// Note: PostOrder Variant would be (2) (3) (1)
// In-Order Variant would be (2) (1) (3)

