//基础数组: [1,2,3,4]
//对象数组: [{name:1},{name:2}]

//可在每个方法前判断是否是数组，下面省略，简洁一点
// if (!Array.isArray(arr)) {
//   throw new Error('参数不是数组')
// }

//基础数组去重
//第一种
function unique1(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
}

//第二种
function unique2(arr) {
  arr = arr.sort()
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      res.push(arr[i])
    }
  }
  return res
}

//第三种
function unique3(arr) {
  return [...new Set(arr)]
}

//第四种
function unique4(arr) {
  return Array.from(new Set(arr))
}

//第五种
function unique5(arr) {
  return arr.reduce((res, cur) => {
    if (res.indexOf(cur) === -1) {
      res.push(cur)
    }
    return res
  }, [])
}

//测试代码
const testArr = [1, 3, 2, 3, 5, 77, 6, 9, 4, 9]
console.log(unique5(testArr))

//分割符 -------------------------------------------------------

// 对象数组去重

//第一种
function uniqueOne(arr, key) {
  let res = []
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    const keyName = arr[i][key]
    if (obj[keyName]) {
      continue
    } else {
      obj[keyName] = true
      res.push(arr[i])
    }
  }
  return res
}

//第二种
function uniqueTwo(arr, key) {
  let cacheObj = {}
  return arr.reduce((prev, current) => {
    cacheObj[current[key]] ? '' : (cacheObj[current[key]] = true && prev.push(current))
    return prev
  }, [])
}

//测试代码
testArr_obj = [{ name: 123 }, { name: 123 }, { name: 453 }]
// console.log(uniqueOne(testArr_obj, 'name'))
console.log(uniqueTwo(testArr_obj, 'name'))
