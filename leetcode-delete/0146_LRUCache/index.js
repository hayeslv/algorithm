/*
 * @Author: Lvhz
 * @Date: 2021-09-27 10:04:00
 * @Description: LRU 缓存机制
 * 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。
 * 实现 LRUCache 类：
 *    1、LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
 *    2、int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
 *    3、void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。
 *       当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 * 
 * 进阶：你是否可以在 O(1) 时间复杂度内完成这两种操作？
 */

//! 基础实现：数组 + 对象实现
var LRUCacheBase = function(capacity) {
  this.keys = []
  this.cache = Object.create(null)
  this.capacity = capacity
};

LRUCacheBase.prototype.get = function(key) {
  if(this.cache[key] !== undefined) {
      // 调整位置
      remove(this.keys, key)
      this.keys.push(key)
      return this.cache[key]
  }
  return -1
};

LRUCacheBase.prototype.put = function(key, value) {
  if(this.cache[key]) {
      // 存在即更新
      this.cache[key] = value
      remove(this.keys, key)
      this.keys.push(key)
  } else {
      // 不存在即加入
      this.keys.push(key)
      this.cache[key] = value
      // 判断缓存是否已超过最大值
      if(this.keys.length > this.capacity) {
          removeCache(this.cache, this.keys, this.keys[0])
      }
  }
};
// 移除key
function remove(arr, key) {
  if(arr.length) {
    const index = arr.indexOf(key)
    if(index <= -1) return
    return arr.splice(index, 1)
  }
}
// 移除缓存中的 key
function removeCache(cache, keys, key) {
  cache[key] = undefined
  remove(keys, key)
}

var lRUCache = new LRUCacheBase(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
console.log(lRUCache.get(1));    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
console.log(lRUCache.get(2));    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
console.log(lRUCache.get(1));    // 返回 -1 (未找到)
console.log(lRUCache.get(3));    // 返回 3
console.log(lRUCache.get(4));    // 返回 4


// ========================================================================================================

//! 进阶：利用 Map 既能保存键值对，并且能够记住键的原始插入顺序
var LRUCache = function(capacity) {
  this.cache = new Map()
  this.capacity = capacity
};

LRUCache.prototype.get = function(key) {
  if(this.cache.has(key)) {
    // 存在即更新
    let temp = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, temp)
    return temp
  }
  return -1
};

LRUCache.prototype.put = function(key, value) {
  if(this.cache.has(key)) {
    // 存在即更新（删除后加入）
    this.cache.delete(key)
  } else if(this.cache.size >= this.capacity) {
    // 不存在即加入
    // 缓存超过最大值，则移除最近没有使用的：this.cache.keys()得到的类型是 MapIterator
    this.cache.delete(this.cache.keys().next().value)
  }
  this.cache.set(key, value)
};

var lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // 缓存是 {1=1}
// lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
// console.log(lRUCache.get(1));    // 返回 1
// lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
// console.log(lRUCache.get(2));    // 返回 -1 (未找到)
// lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
// console.log(lRUCache.get(1));    // 返回 -1 (未找到)
// console.log(lRUCache.get(3));    // 返回 3
// console.log(lRUCache.get(4));    // 返回 4

