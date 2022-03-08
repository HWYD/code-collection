// instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上

function instance_of(obj, constructor) {
  if (typeof obj !== 'object' || obj === null) {
    return false
  }
  let proto = obj.__proto__
  let prototype = constructor.prototype
  while (true) {
    if (proto === null) {
      return false
    } else if (proto === prototype) {
      return true
    }
    proto = proto.__proto__
  }
}

console.log(instance_of([1], Array))
