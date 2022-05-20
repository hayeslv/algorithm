/*
 * @Author: Lvhz
 * @Date: 2021-09-22 11:17:46
 * @Description: Description
 */
const { threeSum } = require('./index')

describe('三数之和', () => {
  it('测试1', () => {
    const nums = [-1,0,1,2,-1,-4]
    expect(threeSum(nums)).toEqual([[-1,-1,2],[-1,0,1]])
  })
  it('测试2', () => {
    const nums = []
    expect(threeSum(nums)).toEqual([])
  })
  it('测试3', () => {
    const nums = [0]
    expect(threeSum(nums)).toEqual([])
  })
})

