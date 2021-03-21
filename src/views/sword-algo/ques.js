/**
 * @desc 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
要求时间复杂度为O(n)。

不修改nums数组，且空间复杂度为O1，用了两个指针保存dp[i-1]和dp[i],并遍历数组，时间复杂度On同时更新sum即可
 */
/**
 *
 */
export function Ques42MaxSubArray(nums) {
  let pre = nums[0]
  let cur = nums[0]
  let sum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    cur = pre >= 0 ? pre + nums[i] : nums[i]
    pre = cur
    sum = sum > pre ? sum : pre
  }
  return sum
}
