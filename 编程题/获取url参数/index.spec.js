/*
 * @Author: Lvhz
 * @Date: 2021-09-22 10:08:51
 * @Description: Description
 */
const { getUrlParam } = require('./index')
describe('获取url参数', () => {
  it('返回数组', () => {
    const url = 'http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe'
    const params1 = 'key'
    expect(getUrlParam(url, params1)).toEqual(['1','2','3'])
  })
  it('没有参数', () => {
    const url = 'www.nowcoder.com'
    const params1 = 'key'
    expect(getUrlParam(url, params1)).toEqual(undefined)
  })
})