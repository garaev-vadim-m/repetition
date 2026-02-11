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
export const deleteDuplicates = function (head) {
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
