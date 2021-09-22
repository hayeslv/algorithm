/*
 * @Author: Lvhz
 * @Date: 2021-09-22 09:34:59
 * @Description: 获取url参数
 * 1. 指定参数名称，返回该参数的值 或者 空字符串
 * 2. 不指定参数名称，返回全部的参数对象 或者 {}
 * 3. 如果存在多个同名参数，则返回数组
 * 4. 不支持URLSearchParams方法
 */

// 示例：
// 输入：http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe key
// 输出：[1, 2, 3]

function getUrlParam(sUrl, sKey) {
  const params = sUrl.split('?')[1]
  if(!params) return undefined
  var paramArr = params.split('#')[0].split('&'); // 取出每个参数的键值对放入数组
  const obj = {}
  paramArr.forEach(element => {
    const [key, value] = element.split('='); // 取出数组中每一项的键与值
    if(obj[key] === undefined) { // 第一次遍历这个元素，直接添加到对象上面
      obj[key] = value
    } else {
      // 不是第一次遍历，说明这个键已有，通过数组存起来
      obj[key] = [].concat(obj[key], value); // 这里obj[key]可能是数值或数组，使用concat就可以对两个类型都兼容了
    }
  })

  // 如果入参只有一个，则返回对象；如果入参有两个，则返回“值或数组”
  return sKey === undefined ? obj : obj[sKey] || ''
}



module.exports = {
  getUrlParam
}


