/*
 * @Author: Lvhz
 * @Date: 2021-09-18 10:47:26
 * @Description: Description
 */
const { flat, unique } = require('./index')

describe('数组扁平化', () => {
  it('嵌套0层', () => {
    const arr = [1,2,3,4,6,7,8]
    expect(flat(arr)).toEqual([1,2,3,4,6,7, 8])
  })
  it('嵌套1层', () => {
    const arr = [1,2,3,4,[5,6],7,8]
    expect(flat(arr)).toEqual([1,2,3,4,5,6,7,8])
  })
  it('嵌套多层', () => {
    const arr = [1,2,[3,4,5,[6,7,8],9],10,[11,12]]
    expect(flat(arr)).toEqual([1,2,3,4,5,6,7,8,9,10,11,12])
  })
})

describe('数组去重', () => {
  const arr = [1,1,2,2,2,3,4,6,6,7,8,9,10,10,10]
  expect(unique(arr)).toEqual([1,2,3,4,6,7,8,9,10])
})

