//类
function People(name,age) {
  //console.log(this) //构造函数这里的this指向实例化对象
  this.name = name
  this.age = age
  //People.address = '中国'
}
//类的方法定义在原型下面，这种是实例方法
People.prototype.showName=function () {
  console.log('show name:' + this.name)
}
//类的静态属性
People.address = '地球'

//类的静态方法
People.showAge = function(){
  //console.log(this)  // 静态方法里的this是指向构造函数，而不是指向实例化对象
  console.log('my age 18')
}

const p1 = new People('小明',18)
console.log(p1)
p1.showName()

const p2 = new People('小丁',20)
console.log(p2)
p2.showName()

//调用静态属性和静态方法
console.log(People.address)
People.showAge()


// 下面是es5继承(组合继承，构造函数结合原型继承)
//父类
function Animal(name) {
  this.name = name
}
Animal.prototype.showName = function(){
  console.log('名字是:'+ this.name)
}

//子类
function Dog(name,color) {
  Animal.call(this,name)    // 属性的继承
  this.color = color
}
//方法继承
Dog.prototype = new Animal()
Dog.prototype.constuctor = Dog


const d1 = new Dog('哈士奇','白色')
console.log(d1)
d1.showName()