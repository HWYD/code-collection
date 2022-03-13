//实现
//1、创建一个全新的对象
//2、将新对象的__pro__指向构造函数的 prototype
//3、将构造函数调用的this 指向对象
//4、如果函数没有返回其他对象，那么返回这个新对象

const ObjectFactory = function (...args) {
  const obj = {}
  console.log(args.length)
  const construct = [].shift.call(args)
  console.log(args.length)
  obj.__proto__ = construct.prototype
  const ret = construct.apply(obj,args)
  return typeof ret === 'object'? ret : obj
}

//测试代码
const TMap = function (options) {
  this.name = options.name
  this.address = options.address
}

// const map = new TMap({
//   name:'tname',
//   address:'ST'
// })

// console.log(map)

console.log(ObjectFactory(TMap,{name:'tname',address:'st'}))