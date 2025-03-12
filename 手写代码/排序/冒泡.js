// 时间复杂度: O(n ^ 2)
// 空间复杂度: O(1)

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

const testArr = [9, 3, 5, 7, 3, 4, 1]

console.log(bubbleSort(testArr))
