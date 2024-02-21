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
    return getDepth(root, 1);
};

function getDepth(root: TreeNode, depth: number): number {
    if (!root.left && !root.right) {
        return depth;
    }
    depth++;
    let depthLeft = depth;
    if(root.left) {
        depthLeft = getDepth(root.left, depth);
    }
    let depthRight = depth;
    if(root.right) {
        depthRight = getDepth(root.right, depth);
    }

    return depthLeft > depthRight ? depthLeft : depthRight;
}