Function.prototype.bindFn = function () {
  const fn = this
  const obj = arguments[0]
  const args = [].slice.call(arguments, 1)
  return function () {
    const args1 = [].slice.call(arguments)
    fn.apply(obj, args.concat(args1))
  }
}

//测试
function origin(a, b) {
  console.log(this.name)
  console.log(a, b)
}

const obj = {
  name: 'xiaoming'
}

const fn = origin.bindFn(obj)

fn(3, 2)

//原生bind 示例
// const func = origin.bind(obj,2)  //这里可传参数
// func(1)   //接收的函数也可传参数，结果为：xiaoming，2，1
