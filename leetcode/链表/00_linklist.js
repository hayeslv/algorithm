/*---------------------------------------- 链表构造方式1 ----------------------------------------*/
function Node1(data = -1, next = null) {
  this.data = data;
  this.next = next;
}

// 头节点
let head = null;
head = new Node1(1);

// 头节点的下一个节点
head.next = new Node1(2);
head.next.next = new Node1(3);
head.next.next.next = new Node1(4);

// 现在就构造出了一条包含4个节点的链表
// 1 => 2 => 3 => 4 => null

//! 遍历链表

// 一般情况下是从头部开始
let p = head;
let str = ''
while(p !== null) {
  str += p.data + ', '
  p = p.next;
}
console.log(str);
// 输出：1, 2, 3, 4,

/*---------------------------------------- 链表构造方式2 ----------------------------------------*/
let data = []; // 数据域
let next = []; // 指针域
function add(ind, p, val) {
  next[ind] = p; // 让 ind 指向 p：这样就在 ind 后面添加节点 p了
  data[p] = val; // p 节点中存储的值是 val
  return;
}
let head1 = 3; // 假设头节点的下标是3
data[3] = 0; // 3节点中存储的值是 0
add(3, 5, 1); // 在 3 节点后面添加 5 节点，存储的值是 1
add(5, 2, 2); // 在 5 节点后面添加 2 节点，存储的值是 2
add(2, 7, 3);
add(7, 9, 100);

let p1 = head1;
let str1 = ''
while(p1) {
  str1 += data[p1] + ', '
  p1 = next[p1];
}
console.log(str1);

// 第一节：2.50







