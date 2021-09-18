/*
 * @Author: Lvhz
 * @Date: 2021-09-18 10:37:09
 * @Description: 携程&蘑菇街&bilibili：手写数组去重、扁平化函数
 */

// 扁平化数组（递归实现）
function flat(arr) {
  let ret = []
  arr.forEach(val => {
    if(Array.isArray(val)) {
      ret = ret.concat(flat(val))
    } else {
      ret.push(val)
    }
  })
  return ret
}

// Set去重
function unique(arr) {
  return [...new Set([...arr])]
}

module.exports = {
  flat,
  unique
}


