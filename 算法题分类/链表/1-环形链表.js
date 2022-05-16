/**
 * @Descripttion: leetcode-141
 * 给你一个链表的头节点 head ，判断链表中是否有环。
 * 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 
 * 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。
 * 
 * 如果链表中存在环 ，则返回 true 。 否则，返回 false 。
 */


//* 思路1：哈希表 */
// 借助一片额外的存储区，来存储我们所有遍历到过的节点
// 1、我们依次把每个遍历到的节点存储到存储区中
// 2、每次我们遍历到一个新节点，我们就判断一下该节点是否在我的存储区中出现过
// 3、如果出现过，则说明我们链表有环
// 4、如果链表访问完毕还没有出现重复的节点，则链表没环

// ! 总结：我们只需要遍历这个链表，在遍历的过程中记录我们遍历过的节点。
// !      如果遇到 next 节点为 null 的节点，说明没有环。
// !      如果遇到我们以前遍历过的节点，说明有环。

var hasCycle = function(head) {
  let hash = new Set()
  while(head) {
    if(hash.has(head)) return true;
    hash.add(head)
    head = head.next;
  } 
  return false
};


//* 思路2：快慢指针 */
// 我们定义两个指针：一个慢指针，一个快指针
// 并且，一开始慢指针指向 head 节点，快指针指向 head.next 节点
// 然后，快指针每次向前移动两步，慢指针每次向前移动一步，禁行遍历整个链表
// 当快指针的 next 节点为 null，或者快指针本身节点为 null。说明链表没有环，遍历结束。
// 如果链表有环，则快慢指针一定会相遇，指向同一个节点，此时遍历结束


var hasCycle = function(head) {
  if(!head || !head.next) return false;

  let fast = head.next, slow = head;
  while((fast !== slow) && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // 跳出循环可能是因为fast走到头了，或者fast和slow相等
  return !!fast && !!fast.next;
};
