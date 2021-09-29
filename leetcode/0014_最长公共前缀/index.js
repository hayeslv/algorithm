/*
 * @Author: Lvhz
 * @Date: 2021-09-28 10:09:09
 * @Description: 最长公共前缀
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 */

var longestCommonPrefix = function(strs) {
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

