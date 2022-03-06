Function.prototype.bindFn = function () {
  const fn = this
  const obj = arguments[0]
  const args = [].slice.call(arguments,1)
  return function(){
    const args1 = [].slice.call(arguments)
    fn.apply(obj,args.concat(args1))
  }
}


//测试
function  origin(a,b) {
  console.log(this.name)
  console.log(a,b)
}

const obj = {
  name:'xiaoming'
}

const fn = origin.bindFn(obj)

fn(3,2)