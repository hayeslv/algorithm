/*
 * @Author: Lvhz
 * @Date: 2021-10-09 19:16:35
 * @Description: 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。
 */

// 解法1：标记法
var getIntersectionNode = function(headA, headB) {
  while(headA) {
    headA.flag = true
    headA = headA.next
  }
  while(headB) {
    if(headB.flag) return headB
    headB = headB.next
  }
  return null
}

// 解法2：双指针法
var getIntersectionNode2 = function(headA, headB) {
  // 清除高度差
  let pA = headA, pB = headB;
  while(pA || pB) {
    if(pA === pB) return pA
    pA = pA === null ? headB : pA.next
    pB = pB === null ? headA : pB.next
  }
  return null
}
