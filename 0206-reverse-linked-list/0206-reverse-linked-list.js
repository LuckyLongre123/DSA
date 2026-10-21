/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head || !head.next) return head;

        let prev = null;
        let cur = head;
        let next = null;

        while (cur) {
            next = cur.next;

            cur.next = prev;
            prev = cur;
            cur = next;
        }

        return prev;

};