/*
 * @Author: Lvhz
 * @Date: 2021-09-22 10:58:07
 * @Description: 三数之和
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 */

// 解法1：暴力破解，三层循环，O(n^3)效率太低不考虑
// 解法2：a+b+c=0，转换思路，a+b=-c，这不就是两数之和吗
// 解法3：利用双指针夹逼
//    3.1 排序，利用排序好的数组，固定一个指针i，夹逼选出left和right
//    3.2 扩展：如果是4数之和，5数之和，n数之和呢？怎么解决？

const threeSum = nums => {
  const len = nums.length;
  const result = []
  // 因为是三数之和，小于三个就不考虑了
  if(len < 3) {
    return result
  }
  nums.sort((a,b) => a-b)
  // !步骤一：选择三数中的第一个数
  // len - 2 同样的道理，小于三个不用考虑
  for(let i=0; i<len-2; i++) {
    if(nums[i] > 0) break; // 如果第一个就大于0了，三个加起来肯定大于0
    if(i && nums[i] === nums[i-1]) continue; // 避免重复的情况

    let left = i+1;
    let right = len - 1;
    // 双指针夹逼
    while(left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if(sum === 0) {
        result.push([nums[i], nums[left++], nums[right--]])
        // push加了之后防止还存在重复
        while(nums[left] === nums[left - 1]) left++
        while(nums[right] === nums[right + 1]) right--
      } else if(sum > 0) {
        right--
      } else {
        left++
      }
    }
  }
  return result
}

module.exports = {
  threeSum
}


