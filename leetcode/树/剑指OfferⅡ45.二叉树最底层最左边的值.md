# 二叉树最底层最左边的值

<a href="https://leetcode.cn/problems/LwUNpT/" target="_blank">二叉树最底层最左边的值</a>

给定一个二叉树的 **根节点** `root`，请找出该二叉树的 **最底层 最左边** 节点的值。

假设二叉树中至少有一个节点。

 

## 方案一：BFS

最简单的应该是 `BFS` 逐层遍历

1. 我们创建一个变量 `ret`，用于记录每行的第一个 `val`
2. 然后创建队列 `queue`，由于题目说明至少有一个节点，则 `root` 无脑入队，开始 `while` 循环
3. 判断每行的第一个节点，将 `ret` 变量更新为首个节点的值
4. 直到队列为空时，终止循环，返回 `ret` 即可

```js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
	const queue = []
  queue.push(root)
  let ret = root.val
  let len = queue.length
  while(len) {
		len = queue.length
    for(let i=0; i<len; i++) {
      let node = queue.shift()
      if(i === 0) ret = node.val
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
  }
  return ret
};
```



## 方案二：DFS

- 对其进行先序或中序遍历
  - 可以确定，无论是先序还是中序遍历，当层数取最大时的访问的第一个节点一定是最底层（高度最高）最左边（同层从左往右第一个访问）的节点
- 在遍历的同时，用 `h` 记录当前节点从上往下方向的高度
- `height` 记录当前全局最高层数
- 当 `height` 发生改变时，用 `max` 记录对应节点
- 当遍历结束即为所求

```js
var findBottomLeftValue = function(root) {
  let height = 0, max = null
	dfs(root, 1)
  return max.val
  
  function dfs(node, h) {
    if(!node) return
    if(h > height) {
      height = h
      max = node
    }
    dfs(root.left, h+1)
    dfs(root.right, h+1)
  }
};
```



















































