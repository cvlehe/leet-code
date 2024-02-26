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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    return hasSum(root, targetSum, 0);
};

function hasSum(root: TreeNode | null, targetSum: number, currentSum: number): boolean {
    if (!root) return false;
    const newSum = root.val + currentSum;
    if (!root.left && !root.right) return newSum === targetSum;
    return hasSum(root.left, targetSum, newSum) || hasSum(root.right, targetSum, newSum);
}