# 83. Remove Duplicates from Sorted List

<span
style="color: #46c6c2;
 padding: 4px 12px;
 border-radius: 16px;
 background-color: #ffffff1a;
 font-size: 12px;
 line-height: 16px">
Easy
</span>

Given the `head` of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list **_sorted_** as well.

### Decision

```js
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
const deleteDuplicates = function (head) {
  //filter version
  // return head.filter((value, index) => head.indexOf(value) === index);
  //Set version
  //return [...new Set(head)];
  //LeetCode requirement ＼（〇_ｏ）／
  let current = head;
  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};
```
