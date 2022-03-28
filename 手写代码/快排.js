// 时间复杂度:
// 最佳: T(n) = O(nlogn), 最差: Tn = O(n^2), 平均: Tn = O(nlogn)

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }
  const target = arr[0]
  let left = []
  let right = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= target) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), target, ...quickSort(right)]
}

let testArr = [5, 7, 2, 10, 9]

const res = quickSort(testArr)
console.log(res)
