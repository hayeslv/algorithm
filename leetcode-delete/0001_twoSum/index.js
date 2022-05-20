/*
 * @Author: Lvhz
 * @Date: 2021-09-17 15:12:15
 * @Description: 两数之和
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 */


var twoSum = function(nums, target) {
  const cache = {};
  for(let i=0; i<nums.length; i++) {
    const number = nums[i]; // 当前数字
    const needNumber = target - number; // 需要的数字
    if(needNumber in cache) return [cache[needNumber], i]
    cache[number] = i;
  }
  return [];
};

module.exports = twoSum
