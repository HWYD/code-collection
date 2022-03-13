//深拷贝实现
function deepClone(obj = {}) {
  if(typeof obj !== 'object' || obj == null){
    return obj
  }
  let result
  if(Array.isArray(obj)){
    result = []
  }else{
    result = {}
  }
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      result[key] = deepClone(obj[key])
    }
  }
  return result
}

// 测试代码
const obj1 = {
  name:'深拷贝',
  info:{
    phone:1234,
    age:18
  },
  arr:[1,2,3,4]
}

const obj2 = deepClone(obj1)
obj2.name ="改变"
console.log(obj1)
console.log(obj2)