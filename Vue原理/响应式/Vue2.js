//触发更新视图
function updateView() {
  console.log('视图更新!')
}

//重新定义数组原型
const oldArrayPrototype = Array.prototype
const arrProto = Object.create(oldArrayPrototype) // 创建新对象，原型指向 oldArrayPrototype,再扩展新的方法不会影响原型
  [('push', 'shift', 'unshift', 'pop', 'splice')].forEach((method) => {
    arrProto[method] = function () {
      updateView()
      oldArrayPrototype[method].call(this, ...arguments)
    }
  })

//重新定义属性，监听起来
function defineReactive(target, key, value) {
  //深度监听
  observer(value)

  Object.defineProperty(target, key, {
    get() {
      return value
    },
    set(newValue) {
      if (newValue !== value) {
        //value一直在闭包中，此处设置完之后，再get时也是获取得到的
        observer(newValue)
        value = newValue
        updateView()
      }
    }
  })
}

//监听对象属性
function observer(target) {
  if (typeof target !== 'object' || target === null) {
    return target
  }

  if (Array.isArray(target)) {
    target.__proto__ = arrProto
  }

  for (let key in target) {
    defineReactive(target, key, target[key])
  }
}

//准备数据
const data = {
  name: 'zhangsan',
  age: 20,
  info: {
    address: '北京'
  },
  nums: [10, 20, 30]
}

//监听数据
observer(data)

//测试
data.name = 'list'
data.age = { num: 11 }
data.info.address = '汕头'
// data.age.num = 00
// data.x = '100'       // 新增属性，监听不到  -- 所以有 Vue.set
// delete data.name     // 删除属性，监听不到  --  所以有 Vue.delete
data.nums.push(4)
