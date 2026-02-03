export const list1 = [4, 1, 8, 4, 5];
export const list2 = [5, 6, 1, 8, 4, 5];
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
export const getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  let listA = headA,
    listB = headB;
  while (listA !== listB) {
    listA = listA ? listA.next : headB;
    listB = listB ? listB.next : headA;
  }

  return listA;
};
