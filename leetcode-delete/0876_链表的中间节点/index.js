/*
 * @Author: Lvhz
 * @Date: 2021-10-09 20:21:09
 * @Description: 给定一个头结点为 head 的非空单链表，返回链表的中间结点。
 * 如果有两个中间结点，则返回第二个中间结点。
 */
var middleNode = function(head) {
  let fast = head, slow = head;
  while(fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}