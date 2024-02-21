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

function maxDepth(root: TreeNode | null): number {
    if(!root) return 0;
    return getDepth(root, 0);
};

function getDepth(root: TreeNode, depth: number): number {
    if (!root) {
        return depth;
    }
    depth++;
    return Math.max(getDepth(root.left, depth), getDepth(root.right, depth));
}