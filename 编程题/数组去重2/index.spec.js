/*
 * @Author: Lvhz
 * @Date: 2021-09-18 11:36:32
 * @Description: Description
 */
const { removeDuplicates1 } = require('./index')

describe('数组去重2', () => {
  it('方式1', () => {
    const arr = [1, 2, 3, 1, 3]
    expect(removeDuplicates1(arr)).toEqual([1, 2, 3])
  })
})

