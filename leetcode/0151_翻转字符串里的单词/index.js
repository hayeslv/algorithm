/*
 * @Author: Lvhz
 * @Date: 2021-10-09 14:55:43
 * @Description: 给你一个字符串 s ，逐个翻转字符串中的所有 单词 。
 * 单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。
 * 请你返回一个翻转 s 中单词顺序并用单个空格相连的字符串。
 * 说明：
 *    1、输入字符串 s 可以在前面、后面或者单词间包含多余的空格。
 *    2、翻转后单词间应当仅用一个空格分隔。
 *    3、翻转后的字符串中不应包含额外的空格。
 */

// 解法1：JSAPI
var reverseWords = function(s) {
  return s.split(' ').filter(item => item !== '').reverse().join(' ')
};

// 解法2：双端队列
var reverseWords2 = function(s) {
  let left = 0,
      right = s.length - 1,
      queue = [],
      word = '';
  while(s.charAt(left) === ' ') left++;
  while(s.charAt(right) === ' ') right--;
  while(left <= right) {
    let char = s.charAt(left)
    if(char === ' ' && word) {
      queue.unshift(word)
      word = ''
    } else if(char !== ' ') {
      word += char
    }
    left++
  }
  queue.unshift(word)
  return queue.join(' ')
}

