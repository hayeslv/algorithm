/*
 * @Author: Lvhz
 * @Date: 2021-09-26 10:17:45
 * @Description: 字符串字符统计
 * 统计字符串中每个字符的出现频率，返回一个 Object，key 为统计字符，value 为出现频率
 * 1. 不限制 key 的顺序
 * 2. 输入的字符串参数不会为空
 * 3. 忽略空白字符
 */

// 示例：
// 输入：'hello world'
// 输出：{h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}

function count(str) {
  const obj = {}
  const arr = str.split('')
  for(let i=0; i<arr.length; i++) {
    if(arr[i] === ' ') continue
    if(arr[i] in obj) {
      obj[arr[i]] = obj[arr[i]] + 1
    } else {
      obj[arr[i]] = 1
    }
  }

  return obj;
}

console.log(count('hello world'));

