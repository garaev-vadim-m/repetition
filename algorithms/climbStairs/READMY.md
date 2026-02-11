# 70. Climbing Stairs

<span
style="color: #46c6c2;
 padding: 4px 12px;
 border-radius: 16px;
 background-color: #ffffff1a;
 font-size: 12px;
 line-height: 16px">
Easy
</span>

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

### Decision

```js
/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  if (n <= 2) {
    return n;
  }
  let prev = 1;
  let curr = 2;

  for (const _ of Array(n - 2)) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  console.log(curr);
  return curr;
};
```
