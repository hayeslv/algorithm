/*
 * @Author: Lvhz
 * @Date: 2021-09-17 15:12:15
 * @Description: 两数之和
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 */
const twoSum = (nums, target) => {
  const cache = {}
  for(let i=0; i<nums.length; i++) {
    const number = nums[i]
    const needNumber = target - nums[i]
    if(needNumber in cache) return [cache[needNumber], i]
    cache[number] = i
  }
  return []
}

console.log(twoSum([3,2,4],6));


