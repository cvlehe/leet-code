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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        if (p === null) {
        return q === null;
    }
    if (q === null) {
        return p === null;
    }
    
    if (p.val !==  q.val) return false;
    
    const left = isSameTree(p.left, q.left);
    const right = isSameTree(p.right, q.right);
    return left && right;
};