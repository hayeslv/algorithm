/*
 * @Author: Lvhz
 * @Date: 2021-09-22 10:47:18
 * @Description: 斐波那契数列
 * 用 JavaScript 实现斐波那契数列函数,返回第n个斐波那契数。 f(1) = 1, f(2) = 1 等
 */

function fibonacci(n) {
  if(n <= 2) return 1
  let cache = []
  for(let i=1; i<=n; i++) {
      if(i <= 2){
          cache[i] = 1
      } else {
          cache[i] = cache[i-1] + cache[i-2]
      }
  }
  return cache[n]
}
