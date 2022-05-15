const fs = require("fs")

const fileList = fs.readdirSync("./m3u8")

// 预习：4db10702054d49eaa513c3f2b0190a31


// 作业：a0eb88301f7c4d07bb23aaaa0a655794
// https://v.baoshiyun.com/resource/media-851073916436480/lud/a0eb88301f7c4d07bb23aaaa0a655794

fileList.forEach(fileName => {
  const fileData = fs.readFileSync(`./m3u8/${fileName}`)
  let fileStr = fileData.toString()
  let reg = /media-(\d*)&videoId/
  reg.test(fileStr)
  const mediaId = RegExp.$1
  
  const tsMd5Reg = /,\n(.*)-00001.ts/
  tsMd5Reg.test(fileStr)
  const tsMd5 = RegExp.$1

  const url = `https://v.baoshiyun.com/resource/media-${mediaId}/lud/${tsMd5}`

  const newStr = fileStr.replace(new RegExp(tsMd5, "g"), url)

  // 删除文件
  fs.unlinkSync(`./m3u8/${fileName}`)
  // 新增文件
  fs.writeFileSync(`./m3u8/${fileName}`, newStr)
})