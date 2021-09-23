/*
 * @Author: Lvhz
 * @Date: 2021-09-22 15:56:56
 * @Description: Description
 */
const { search } = require('./index')

describe('N数之和', () => {
  it('测试1', () => {
    const arr = [1, 4, 7, 11, 9, 8, 10, 6];
    const N = 3;
    const M = 27;
    expect(search(arr, N, M)).toEqual([ [ 7, 11, 9 ], [ 9, 8, 10 ], [ 11, 10, 6 ] ])
  })
})

