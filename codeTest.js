class Scheduler {
  list = []
  maxCount = 2
  tempRunIndex = 0
  add(promiseCreator) {
    this.list.push(promiseCreator)
  }
  startTask() {
    for(let i=0; i<this.maxCount; i++) {
      this.request()
    }
  }
  request() {
    if(!this.list.length || this.tempRunIndex >= this.maxCount) return
    this.tempRunIndex++
    this.list.shift()().then(() => {
      this.tempRunIndex--
      this.request()
    })
  }
}

const timeout = time => new Promise(resolve => {
  setTimeout(resolve, time)
})

const scheduler = new Scheduler()

const addTask = (time, order) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)))
}

addTask(1000, 1)
addTask(500, 2)
addTask(300, 3)
addTask(400, 4)

scheduler.startTask()