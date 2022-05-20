/*
 * @Author: Lvhz
 * @Date: 2021-10-11 08:39:04
 * @Description: 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 * 进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
 */

// 方法1：迭代法
var reverseList1 = function(head) {
  if(!head || !head.next) return head;
  let prev = null, curr = head;
  while(curr) {
    // 用于临时存储 curr 后继节点
    let next = curr.next;
    // 反转 curr 的后继指针
    curr.next = prev;
    // 变更 prev、curr
    prev = curr;
    curr = next;
  }
  return prev;
}

// 方法2：尾递归法
var reverseList2 = function(head) {
  if(!head || !head.next) return head;
  head = reverse(null, head);
  return head;
}
var reverse = function(prev, curr) {
  if(!curr) return prev;
  var next = curr.next;
  curr.next = prev;
  return reverse(curr, next);
}

// 方法3：递归法
var reverseList3 = function(head) {
  if(!head || !head.next) return head;
  let next = head.next;
  // 递归反转
  var reverseHead = reverseList3(next);
  // 变更指针
  next.next = head;
  head.next = null;
  return reverseHead;
}