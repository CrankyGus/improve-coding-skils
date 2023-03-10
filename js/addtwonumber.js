let l1 = [2, 4, 3];
let l2 = [5, 6, 4];

// //   Definition for singly-linked list.
// class ListNode {
//     constructor(val, next) {
//         this.val = val === undefined ? 0 : val;
//         this.next = next === undefined ? null : next;
//     }
// }

function addTwoNumbers(l1, l2) {
    let head = new ListNode();
    let cur = head;
    let carry = 0;
    while (l1 || l2) {
        let l1Val = l1 ? l1.val : 0;
        let l2Val = l2 ? l2.val : 0;
        let sum = l1Val + l2Val + carry
        carry = sum > 9 ? 1 : 0;
        if (l1) {
            l1.val = sum % 10;
            cur.next = l1;
        } else {
            l2.val = sum % 10;
            cur.next = l2;
        }
        cur = cur.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    if (carry > 0) {
        cur.next = new ListNode(1);
    }
    return head.next;
}


