/*
 * @Author: Lvhz
 * @Date: 2021-09-23 08:48:26
 * @Description: 实现一个转换函数 convert，将 JSON 对象的 key 从下划线形式（under_score_case）转换到小驼峰形式（camelCase）
 */

// 字符串的下划线格式转驼峰格式：hello_world => helloWorld
function underline2Hump(str) {
  return str.replace(/_(\w)/g, function(all, letter) {
    return letter.toUpperCase()
  })
}

// 字符串的驼峰格式转下划线格式：helloWorld => hello_world
function hump2Underline(s) {
  return s.replace(/([A-Z])/g, '_$1').toLowerCase()
}

// JSON对象的key值由下划线转换为驼峰式
function jsonToHump(obj) {
  if(obj instanceof Array) {
    obj.forEach(v => jsonToHump(v))
  } else if(obj instanceof Object) {
    Object.keys(obj).forEach(key => {
      let newKey = underline2Hump(key)
      if(newKey !== key) {
        obj[newKey] = obj[key]
        delete obj[key]
      }
      jsonToHump(obj[newKey])
    })
  }
  return obj
}

// JSON key 由驼峰转下划线
function jsonToUnderline(obj) {
  if(obj instanceof Array) {
    obj.forEach(v => jsonToUnderline(v))
  } else if(obj instanceof Object) {
    Object.keys(obj).forEach(key => {
      let newKey = hump2Underline(key)
      if(newKey !== key) {
        obj[newKey] = obj[key]
        delete obj[key]
      }
      jsonToUnderline(obj[newKey])
    })
  }
  return obj
}


module.exports = {
  underline2Hump,
  hump2Underline,
  jsonToHump,
  jsonToUnderline
}







