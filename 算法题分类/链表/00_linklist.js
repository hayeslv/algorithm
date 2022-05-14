function Node(data = -1, next = null) {
  this.data = data;
  this.next = next;
}

// 头节点
let head = null;
head = new Node(1);

// 头节点的下一个节点
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

// 现在就构造出了一条包含4个节点的链表
// 1 => 2 => 3 => 4 => null

//! 遍历链表

// 一般情况下是从头部开始
let p = head;
while(p !== null) {
  console.log(p.data);
  p = p.next;
}
// 输出：1 2 3 4



