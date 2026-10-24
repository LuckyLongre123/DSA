/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number;
 *     next: ListNode | null;
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val);
 *         this.next = (next===undefined ? null : next);
 *     }
 * }
 */

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

var isPalindrome = function (head) {
    if (!head || !head.next) return true;

    let cur = head;
    let mid = reverse(getMid(head));

    while (mid) {
        if (cur.val !== mid.val) return false;

        cur = cur.next;
        mid = mid.next;
    }

    return true;
};