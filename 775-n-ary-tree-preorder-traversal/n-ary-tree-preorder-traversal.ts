/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function preorder(root: Node | null): number[] {
    if (!root) return [];
    const values = [];
    addChildren(root, values);
    return values;
};

function addChildren(node: Node | null, values: number[]) {
    if (!node) return;
    values.push(node.val);
    for(const child of node.children) {
        addChildren(child, values);
    }
}