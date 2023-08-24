function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Find the tallest height of a binary search tree.

Ex. the tallest height of:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

is 3, because the tallest height of the tree connects the numbers 4 - 7 - 9 - 8
and has 3 links.

*/

const bstHeight = tree => {
  if (!tree) return -1
  return Math.max(bstHeight(tree.left), bstHeight(tree.right)) + 1
};



const test = new BinarySearchTree(4)
test.left = new BinarySearchTree(2)
test.left.left = new BinarySearchTree(1)
test.left.right = new BinarySearchTree(3)
test.right = new BinarySearchTree(7)
test.right.right = new BinarySearchTree(9)
test.right.right.left = new BinarySearchTree(8)

console.log(bstHeight(test))


/*
  Extension:

  Write a function to see if a binary tree is "superbalanced".
  An empty tree is balanced. A non-empty binary tree T is balanced if:
    1) Left subtree of T is balanced
    2) Right subtree of T is balanced
    3) The difference between heights of left subtree and right subtree is not more than 1.
  example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF

  A superbalanced tree is a tree that is balanced at every subtree level as well.

  Ex. 
        4                       4
      /   \                   /   \
     2     7                2       7
    / \     \             /  \     /  \
   1   3     9           1    3   5    9
            /                         /
           8                         8

  The tree on the left is balanced - height of left side is 2, height of right side is 3.
  But, it is not superbalanced since for the 7 subtree, height of left is 0, height of right is 2.
  
  The tree on the right is superbalanced since the difference in height is not more than 1 at any given subtree.
 */

const superbalanced = tree => {
  if (tree.left && tree.right) {
    return superbalanced(tree.left) && superbalanced(tree.right)
  }
  if (tree.right || tree.left) {
    return Math.abs(bstHeight(tree.right) - bstHeight(tree.left)) <= 1
  }
  return true
};

const test2 = new BinarySearchTree(4)
test2.left = new BinarySearchTree(2)
test2.left.left = new BinarySearchTree(1)
test2.left.right = new BinarySearchTree(3)
test2.right = new BinarySearchTree(7)
test2.right.left = new BinarySearchTree(5)
test2.right.right = new BinarySearchTree(9)
test2.right.right.left = new BinarySearchTree(8)


console.log(superbalanced(test))
console.log(superbalanced(test2))

module.exports = {BinarySearchTree, bstHeight, superbalanced};