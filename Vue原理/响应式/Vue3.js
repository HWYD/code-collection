function reactive(target = {}) {
  if (typeof target !== 'object' || target == null) {
    return target
  }

  //代理配置
  const proxyConf = {
    get(target, key, receiver) {
      const ownKeys = Reflect.ownKeys(target)
      if (ownKeys.includes(key)) {
        console.log('get', key)
      }
      const result = Reflect.get(target, key, receiver)
      // return result
      return reactive(result) // 再包一层监听，实现深度监听
      // 通过get 来获取，逐层触发代理，实现响应式
    },
    set(target, key, val, receiver) {
      if (val === target[key]) {
        return true
      }
      // 判断是否是新增的
      const ownKeys = Reflect.ownKeys(target)
      if (ownKeys.includes(key)) {
        console.log('已有的key')
      } else {
        console.log('新增的key')
      }

      const result = Reflect.set(target, key, val, receiver)
      console.log('set', key, val)
      return result
    },
    deleteProperty(target, key) {
      const result = Reflect.deleteProperty(target, key)
      console.log('deleteProperty', key)
      return result
    }
  }
  //生成代理对象
  const observed = new Proxy(target, proxyConf)
  return observed
}

const data = {
  name: 'zhangsan',
  age: 20,
  info: {
    address: '北京'
  },
  nums: [10, 20, 30]
}

const proxyData = reactive(data)
