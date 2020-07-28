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
