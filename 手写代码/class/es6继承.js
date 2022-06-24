// es6的类
class People {
  constructor(name,age){
    this.name = name
    this.age = age
  }
  showName(){
    console.log(this.name)
  }
  static getAge(){        //这是定义静态方法，能被子类继承
    console.log('静态方法的获取age')
  }
}
People.address = '中国'   //定义静态属性，跟es5一样的定义
 
let p1 = new People('小明','18')
console.log(p1)
People.getAge()   //调用静态方法


//继承
class Student extends People{
  constructor(name,age,job){
    super(name,age)   // 继承属性,继承方法
    this.job = job
  }
  todo(){
    console.log('任务是学习')
  }
}
const s1 = new Student('小红',10,'小学生')
console.log(s1)
s1.showName()
s1.todo()

Student.getAge()   //调用父类的静态方法