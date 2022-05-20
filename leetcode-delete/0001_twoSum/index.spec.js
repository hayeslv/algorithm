/*
 * @Author: Lvhz
 * @Date: 2021-09-17 15:24:57
 * @Description: Description
 */
const twoSum = require('./index')

describe('twoSum', () => {
  it('测试1', () => {
    const nums = [2, 7, 11, 15]
    const target = 9
    expect(twoSum(nums, target)).toEqual([0,1])
  })
  it('测试2', () => {
    const nums = [3,2,4]
    const target = 6
    expect(twoSum(nums, target)).toEqual([1,2])
  })
  it('测试3', () => {
    const nums = [3,3]
    const target = 6
    expect(twoSum(nums, target)).toEqual([0,1])
  })
})
