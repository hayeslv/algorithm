/*
 * @Author: Lvhz
 * @Date: 2021-10-09 19:56:13
 * @Description: 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 进阶：你能尝试使用一趟扫描实现吗？
 */

// 方法1：添加 preHead节点
var removeNthFromEnd = function(head, n) {
  let preHead = new ListNode(0)
  preHead.next = head;
  let fast = preHead, slow = preHead;
  // 快指针先走 n+1 步
  while(n--) {
    fast = fast.next
  }
  // fast、slow 一起前进
  while(fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next
  return preHead.next
}

// 方法2：单独处理倒数第n个节点
var removeNthFromEnd2 = function(head, n) {
  let fast = head, slow = head;
  // 快指针先走n步
  while(--n) {
    fast = fast.next;
  }
  if(!fast.next) return head.next;
  fast = fast.next
  // fast、slow一起前进
  while(fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
}
