## 当async/await遇上forEach

> for和forEach的差别是后者不能正常的跳出循环（return、break等），其他的差别不大，把forEach转成for的写法就知道为什么你的for写法可以顺序执行而forEach不能。

for：

```js
const report = async (arr) => {
  for(let i=0, len = arr.length; i<len; i++) {
    await asyncFn(arr[i])
  }
}
```

forEach:

```js
const report = async (arr) => {
  arr.forEach(async item => {
    await asyncFn(item)
  })
}
```

上述forEach的写法相当于：

```js
const report = async () => {
  const asyncFnWrap = async item => {
    await asyncFn(item)
  }
  for(let i=0, len = arr.length; i<len; i++) {
    asyncFnWrap(arr[i])
  }
}
```

第一个for循环的asyncFn要await返回后才继续执行，所以是顺序执行，而第二个的asyncFnWrap不会阻塞循环。



实际上还是forEach内部实现不支持await的问题（模拟下）：

```js
Array.prototype.forEach = function(callback) {
  // this represents our array
  for(let index=0; index<this.length; index++) {
    callback(this[index], index, this)
  }
}
```

扩展一下支持await的

```js
Array.prototype.forEachAsync = async function(fn) {
  for(let t of this) await fn(t)
}
Array.prototype.forEachAsyncParallel = async function(fn) {
  await Promise.all(this.map(fn))
}
```



## 问题提出

### forEach遇到async/await会发生什么？

先来看看JavaScript中的循环数组遍历

在JavaScript中提供了如下四种循环遍历数组元素的方式：

- for：这是循环遍历数组元素最简单的方式

```js
for(let i=0; i<arr.length; i++) {
  console.log(arr[i])
}
```

- for-in：**for-in**语句以任意顺序遍历一个对象的可枚举属性，对于数组即是**数组下标**，对于对象即是对象的**key**值。注意**for-in**遍历返回的对象属性都是字符串类型，即使是数组下标，也是字符串 “0”，“1”，“2” 等等。【不推荐使用 for-in 语句】

```js
for(var index in myArray) {
  console.log(myArray[index])
}
```

- forEach：用于调用数组的每个元素，并将元素传递给回调函数；注意在回调函数中无法使用 **break** 跳出当前循环，也无法使用 **return** 返回值

```js
myArray.forEach(value => {
  console.log(value)
})
```

- for-of：for-of语句为各种 collection 集合对象专门定制，遍历集合对象的属性值，注意和 for-in 的区别

```js
for(var value of myArray) {
  console.log(value)
}
```



## 分析问题

在本例中， **forEach** 的回调函数是一个异步函数，异步函数中包含一个 **await** 等待 Promise 返回结果，我们期望数组元素串行执行这个异步操作，但实际却是并行执行了。

forEach的简单polyfill：

```js
Array.prototype.forEach = function(callback) {
  for(let index=0; index<this.length; index++) {
    callback(this[index], index, this)
  }
}
```

相当于 for 循环执行了这个异步函数，所以是**并行执行**



## 解决问题

### 方式1

我们可以改造一下 forEach ，确保每一个异步的回调执行完成后，才执行下一个

```js
async function asyncForEach(array, callback) {
  for(let index=0; index<array.length; index++) {
    await callback(array[index], index, array)
  }
}

async function test() {
  var nums = await getNumbers()
  asyncForEach(nums, async x=> {
    var res = await multi(x)
    console.log(res)
  })
}
```

### 方式2

使用 for-of 替代 for-each。

for-of 可以遍历各种集合对象的属性值，要求被遍历的对象需要实现迭代器（iterator）方法，例如 **myObject[Symbol.iterator]（）** 用于告知 JS 引擎如何遍历该对象。一个拥有 **[Symbol.iterator]（）**方法的对象被任务是可遍历的。

```js
var zeroesForeverIterator = {
  [Symblo.iterator]: function () {
    return this;
  },
  next: function() {
    return {done: false, value:0}
  }
}
```

如上就是一个最简单的迭代器对象；for-of 遍历对象时，先调用遍历对象的迭代器方法 **[Symblo.iterator]（）** ，该方法返回一个迭代器对象（迭代器对象中包含一个 next 方法）；然后调用该迭代器对象上的 next 方法。

每次调用 next 方法都返回一个对象，其中 done 和 value 属性用来表示遍历是否结束和当前遍历的属性值，当 done 的值为 true 时，遍历就停止了

```js
for(VAR of ITERABLE) {
  STATEMENTS
}
```

等价于

```js
var $iterator = ITERABLE[Symbol.iterator]();
var $result = $iterator.next()
while(!$result.done) {
  VAR = $result.value;
  STATEMENTS
  $result = $iterator.next()
}
```

由此可以知道 for-of 和forEach 遍历元素时处理的方式是不同的。使用 for-of 替代 for-each 后代码为

```js
async function test() {
  var nums = await getNumbers()
  for(let x of nums) {
    var res = await multi(x)
    console.log(res)
  }
}
```

























































