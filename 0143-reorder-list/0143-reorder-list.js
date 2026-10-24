/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (!head || !head.next) return;

    let rev = reverse(getMid(head));
    let cur = head;

    while (rev?.next) {
        let t1 = cur.next;
        let t2 = rev.next;

        cur.next = rev;
        rev.next = t1;

        cur = t1;
        rev = t2;
    }

};

function getMid(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next
    }
    return slow;
}

function reverse(head) {
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
}