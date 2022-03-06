Function.prototype.applyFn = function(context,args) {
  context = context || window
  arg = args || []
  const key = Symbol()
  context[key] = this
  const result =  context[key](...args)
  delete context[key]
  return result
}

// 测试
function origin(a,b) {
  console.log(this.name)
  console.log(a,b)
}

const obj = {
  name:'xiaoming'
}

origin.applyFn(obj,[1,3])