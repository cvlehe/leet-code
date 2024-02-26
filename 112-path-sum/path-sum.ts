/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function hasPathSum(root: TreeNode | null, targetSum: number, result: number = 0): boolean {
        // If the current node is null, return false
    if (!root) return false;

    // Add the current node's value to the result
    result += root.val;

    // If the current node is a leaf, check if the result equals the targetSum
    if (!root.left && !root.right) {
        return result === targetSum;
    }

    // Recursively check the left and right subtrees
    return hasPathSum(root.left, targetSum, result) || hasPathSum(root.right, targetSum, result);
};

function hasSum(root: TreeNode | null, targetSum: number, currentSum: number): boolean {
    if (!root) return false;
    const newSum = root.val + currentSum;
    if (newSum === targetSum) return true;
    return hasSum(root.left, targetSum, newSum) || hasSum(root.right, targetSum, newSum);
}