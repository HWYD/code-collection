

//方法一：reduce
function flatten1(arr) {
  return arr.reduce((prev,cur)=>{
   return prev.concat(Array.isArray(cur)? flatten(cur):cur)
  },[])
}

//方法2：直接使用es6的flat方法
function flatten2(arr) {
  return arr.flat(Infinity)
}

//方法3：使用while
function flatten3(arr) {
  while (arr.some(Array.isArray)) {
    arr = [].concat(...arr)
  }
  return arr
}


//测试代码
const array = [1,2,3,4,[5,6,[7,8]]]
console.log(flatten3(array))