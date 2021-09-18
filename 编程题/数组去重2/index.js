/*
 * @Author: Lvhz
 * @Date: 2021-09-18 11:23:43
 * @Description: 腾讯：不产生新数组，删除数组里的重复元素 
 */

// 数组去重的方式有很多，Set、filter过滤等，但这三种方法（Set、filter、reducer）都产生了新数组
// filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。

// 方法1：排序去重
// sort() 方法用 “原地算法” 对数组的元素进行了排序，并返回数组。默认排序是在将元素转换为字符串，然后比较他们的 UTF-16 代码单元值序列时构建的
const removeDuplicates1 = nums => {
  nums.sort()
  // 去重
  let len = 1
  for(let i=1; i<nums.length; i++) {
    if(nums[i] != nums[i-1]) nums[len++] = nums[i];
  }
  nums.splice(len)
  return nums
}

// 方法2：优化
const removeDuplicates2 = nums => {
  let len = nums.length - 1;
  for(let i=len; i>=0; i--) {
    if(nums.indexOf(nums[i]) !== i) {
      nums[i] = nums[len --]
    }
  }
  // 删除重复项
  nums.splice(len+1)
  return nums
}


module.exports = {
  removeDuplicates1,
  removeDuplicates2
}
