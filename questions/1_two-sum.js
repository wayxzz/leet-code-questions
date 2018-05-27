/*
 *
 * 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
 *
 * 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
 *
 * 示例:
 *
 * 给定 nums = [2, 7, 11, 15], target = 9
 *
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 *
 *
 *
 */

 /**
  *
  * @param {Number[]} nums
  * @param {Number} target
  * @return {Number[]}
  */
 const twoSum = function(nums, target) {
    const len = nums.length;
    let j = -1;
    let result = [];
    for(let i = 0; i < len - 1; i++) {
        j = nums.lastIndexOf(target - nums[i]);
        if(j > i) {
            result = [i, j];
            break;
        }
    }
    return result;
 }

 module.exports = twoSum;
