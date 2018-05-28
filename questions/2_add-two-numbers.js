/*
 *
 * 给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。
 * 
 * 你可以假设除了数字 0 之外，这两个数字都不会以零开头。
 * 
 * 示例：
 * 
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 * 
 * 
 *
 */


 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    let head = new ListNode();
    let originalHead = head;
    let carry = 0;
    let val = 0;
    let v1 = 0;
    let v2 = 0;

    while(l1 || l2 || carry) {
        v1 = 0;
        v2 = 0;
        if(l1) {
            v1 = l1.val;
            l1 = l1.next;
        }
        if(l2) {
            v2 = l2.val;
            l2 = l2.next;
        }

        let sum = v1 + v2 + carry;

        if(sum >= 10) {
            val = sum - 10;
            carry = 1;
        } else {
            val = sum;
            carry = 0;
        }

        head.next = new ListNode(val);
        head = head.next;
    }

    return originalHead.next;
};


module.exports = {
    ListNode,
    addTwoNumbers
}
