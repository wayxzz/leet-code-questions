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

const {ListNode, addTwoNumbers} = require("../questions/2_add-two-numbers");


test('l1=(5), l2=(5), result=(0, 1)', () => {
    const l1 = new ListNode(5);
    const l2 = new ListNode(5);
    const result = new ListNode(0);
    result.next = new ListNode(1);

    expect(addTwoNumbers(l1, l2)).toEqual(result);
})

test('l1=(2, 4, 3), l2=(5, 6, 4), result=(7,0,8)', () => {
    const l1 = new ListNode(2);
    l1.next = new ListNode(4);
    l1.next.next = new ListNode(3);

    const l2 = new ListNode(5);
    l2.next = new ListNode(6);
    l2.next.next = new ListNode(4);

    const result = new ListNode(7);
    result.next = new ListNode(0);
    result.next.next = new ListNode(8);

    expect(addTwoNumbers(l1, l2)).toEqual(result);
})


test('l1=(2, 4), l2=(5, 6, 4), result=(7,0,5)', () => {
    const l1 = new ListNode(2);
    l1.next = new ListNode(4);

    const l2 = new ListNode(5);
    l2.next = new ListNode(6);
    l2.next.next = new ListNode(4);

    const result = new ListNode(7);
    result.next = new ListNode(0);
    result.next.next = new ListNode(5);

    expect(addTwoNumbers(l1, l2)).toEqual(result);
})

test('if l1 is (1, 8), l2 is (0), result must equal to (1, 8)', () => {
    const l1 = new ListNode(1);
    l1.next = new ListNode(8);

    const l2 = new ListNode(0);

    const result = new ListNode(1);
    result.next = new ListNode(8);

    expect(addTwoNumbers(l1, l2)).toEqual(result);
})
