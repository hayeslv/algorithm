function unique(arr) {
  return [...new Set(arr)]
}

function flat(arr) {
  let ret = []
  arr.forEach(val => {
    if(Array.isArray(val)) {
      ret = ret.concat(flat(val))
    } else {
      ret.push(val)
    }
  })
  return ret
}

console.log(unique([1,1,1,2,2,2,3,4,5,6,7,8,8,8]));
console.log(flat([1,2,3,[3,4,4,[5]],2,[4,5,[5]]]));