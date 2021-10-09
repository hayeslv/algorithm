/*
 * @Author: Lvhz
 * @Date: 2021-09-28 10:09:09
 * @Description: 最长公共前缀
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 */

// 解法一：逐个比较
var longestCommonPrefix1 = function(strs) {
  if(strs === null || strs.length === 0) return ''
  let prevs = strs[0]
  for(let i=1; i<strs.length; i++) {
    let j=0
    for(; j<prevs.length && j<strs[i].length; j++) {
      if(prevs.charAt(j) !== strs[i].charAt(j)) break
    }
    prevs = prevs.substring(0, j)
    if(prevs === '') return ''
  }
  return prevs
}

// 解法二：仅需最大、最小字符串的最长公共前缀（相当于从头到尾找不一样的字母）
var longestCommonPrefix2 = function(strs) {
  if(strs === null || strs.length === 0) return ''
  if(strs.length === 1) return strs[0]
  let min = 0, max = 0
  // 找出min和max
  for(let i=1; i<strs.length; i++) {
    if(strs[min] > strs[i]) min = i;
    if(strs[max] < strs[i]) max = i;
  }
  for(let j=0; j<strs[min].length; j++) {
    if(strs[min].charAt(j) !== strs[max].charAt(j)) {
      return strs[min].substring(0, j);
    }
  }
  return strs[min]
}

// 解法三：分治策略，归并思想
var longestCommonPrefix3 = function(strs) {
  if(strs === null || strs.length === 0) return ''
  return lcPrefixRec(strs);
}
// 若分裂后的两个数组长度不为1，则继续分裂
// 直到分裂后的数组长度为1
// 然后比较获取最长公共前缀
function lcPrefixRec(arr) {
  let length = arr.length
  if(length === 1) return arr[0]
  let mid = Math.floor(length / 2),
      left = arr.slice(0, mid),
      right = arr.slice(mid, length);
  return lcPrefixTwo(lcPrefixRec(left), lcPrefixRec(right));
}
// 求str1与str2的最长公共前缀
function lcPrefixTwo(str1, str2) {
  let j = 0;
  for(; j<str1.length && j <str2.length; j++) {
    if(str1.charAt(j) !== str2.charAt(j)) break
  }
  return str1.substring(0, j)
}
