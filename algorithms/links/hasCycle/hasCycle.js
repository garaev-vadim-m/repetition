class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

export const head1 = [3, 2, 0, -4];

/**
 * @param {ListNode} head
 */
export const hasCycle = function (head) {
  const link = new Set();

  let current = head;
  while (current) {
    if (link.has(current)) return true;
    link.add(current);
    current = current.next;
  }
  return false;
};
