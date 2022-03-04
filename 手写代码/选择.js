//时间复杂度: O(n^2)

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        const temp = arr[minIndex]
        arr[minIndex] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

let testArr = [2, 5, 7, 2, 10, 9, 1, 2, 3, 8, 2, 1]

console.log(selectionSort(testArr))
