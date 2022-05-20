/*
 * @Author: Lvhz
 * @Date: 2021-09-22 11:26:20
 * @Description: 字节：N数之和
 * 请用算法实现，从给定的无序、不重复的数组A中，取出N个数，使其想加和为M。并给出算法的时间、空间复杂度，如：
 * var arr = [1, 4, 7, 11, 9, 8, 10, 6];
 * var N = 3;
 * var M = 27;
 * Result:
 * [7, 11, 9], [11, 10, 6], [9, 8, 10]
 */

// 解题思路：利用二进制
// 根据数组长度构建二进制数据，再选择其中满足条件的数据。
// 我们用 1 和 0 来表示数组中某位元素是否被选中。因此，可以用 0110 来表示数组中第 1 位和第 2 位被选中了。
// 所以，本题可以解读为：
// 1：数组中被选中的个数是 N
// 2：被选中的和是 M
// 最终题解为：遍历所有二进制，判断选中的个数是否为 N，然后再求对应的元素之和，看其是否为 M

// 参数依次为目标数组、选取元素数目、目标和
const search = (arr, count, sum) => {
  // 计算某选择情况下有几个 1，也就是选择元素的个数
  const getCount = num => {
    let count = 0
    while(num) {
      num &= (num - 1)
      count++
    }
    return count
  }

  let len = arr.length, bit = 1 << len, res = []

  // 遍历所有的选择情况
  for(let i=1; i<bit; i++) {
    // 首先需要满足条件：选择的元素个数 === count
    if(getCount(i) !== count) continue;
    let s = 0, temp = []

    // 每一种满足个数为 N 的选择情况下，继续判断是否满足和为M
    for(let j=0; j<len; j++) {
      // 建立映射，找出选择位上的元素
      if(i & (1 << j)) {
        s += arr[j]
        temp.push(arr[j])
      }
    }

    // 如果这种选择情况满足和为 M
    if(s === sum) res.push(temp)
  }

  return res
}


module.exports = {
  search
}