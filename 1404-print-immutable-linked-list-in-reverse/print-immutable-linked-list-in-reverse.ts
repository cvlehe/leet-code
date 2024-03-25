/**
 * // This is the ImmutableListNode's API interface.
 * // You should not implement it, or speculate about its implementation
 * class ImmutableListNode {
 *      printValue() {}
 *
 *      getNext(): ImmutableListNode {}
 * }
 */

function printLinkedListInReverse(head: ImmutableListNode) {
	const nodes: ImmutableListNode[] = [head];
    let currrentNode = head;
    while(currrentNode.getNext() != null) {
        currrentNode = currrentNode.getNext();
        nodes.push(currrentNode);
    }
    for(var i = nodes.length - 1; i >= 0; i--) {
        nodes[i].printValue();
    }
};