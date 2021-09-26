/*
 * @Author: Lvhz
 * @Date: 2021-09-24 17:11:33
 * @Description: 获取字符串的长度
 * 如果第二个参数 bUnicode255For1 === true，则所有字符长度为 1
 * 否则如果字符 Unicode 编码 > 255 则长度为 2
 * 输入：'hello world, 牛客', false
 * 输出：17
 */

function cssStyle2DomStyle(sName) {
  const newName =  sName.replace(/-(\w)/g, (all, letter) => {
      return letter.toUpperCase()
  })
  return newName[0].toLowerCase() + newName.substr(1, newName.length)
}

console.log(cssStyle2DomStyle('-webkit-background-composite'));

