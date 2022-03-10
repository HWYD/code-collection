
const testArr = [1, 3, 2, 5, 77, 6, 9]

//第一种:  Math.max
const res = Math.max(...testArr)
//或借用apply 传参
// const res = Math.max.apply(null,testArr)

// 第二种：reduce
function maxNum2(arr) {
  return arr.reduce((max,cur)=>{
   return max > cur? max:cur
  })
}

//第三种：sort 函数
function maxNum3(arr) {
  return arr.sort((a,b)=> b-a)[0]
}

console.log(maxNum3(testArr))
console.log(res)