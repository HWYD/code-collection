// 时间复杂度: O(n*log N)
// 空间复杂度: O(n)

const mergeSort = (arr) => {
  if (arr.length === 1) return arr
  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid, arr.length)
  const orderLeft = mergeSort(left)
  const orderRight = mergeSort(right)
  const res = []
  while (orderLeft.length || orderRight.length) {
    if (orderLeft.length && orderRight.length) {
      res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
    } else if (orderLeft.length) {
      res.push(orderLeft.shift())
    } else if (orderRight.length) {
      res.push(orderRight.shift())
    }
  }
  return res
}

let testArr = [2, 5, 7, 2, 10, 9, 1, 2, 3, 8, 2, 1]

console.log(mergeSort(testArr))
