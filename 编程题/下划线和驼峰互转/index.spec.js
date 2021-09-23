/*
 * @Author: Lvhz
 * @Date: 2021-09-23 08:56:43
 * @Description: Description
 */
const { underline2Hump, hump2Underline, jsonToHump, jsonToUnderline } = require('./index')
describe('下划线和驼峰互转', () => {
  it('字符串的下划线格式转驼峰格式', () => {
    expect(underline2Hump('hello_world')).toEqual('helloWorld')
  })
  it('字符串的驼峰格式转下划线格式', () => {
    expect(hump2Underline('helloWorld')).toEqual('hello_world')
  })
  it('JSON key 下划线转驼峰', () => {
    expect(jsonToHump({
      '_a_b_c': {
        'd_f_c': 'e_j_f'
      }
    })).toEqual({
      ABC: {
        dFC: 'e_j_f'
      }
    })
  })
  it('JSON key 驼峰转下划线', () => {
    expect(jsonToUnderline({
      'ABC': {
        'dFC': 'EJF'
      }
    })).toEqual({
      '_a_b_c': {
        'd_f_c': 'EJF'
      }
    })
  })
})