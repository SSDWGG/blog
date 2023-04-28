# js篇
## 类型检测
  关于类型检测，首先我们知道JS有7种基本数据类型：Undefined、Null、Boolean、Number、String、Symbol、BigInt
  和引用数据类型: 对象Object（包含Object、Array、RegExp、Date、Math、Function）

  - typeof 可以用于检测基本数据类型（不包含null）

  - instanceof 可以正确的判断对象的类型（原型链查找）

  - 手动实现一个instanceof
```
function _instanceof(left, right) {
    // 由于instance要检测的是某对象，需要有一个前置判断条件
    //基本数据类型直接返回false
    if(typeof left !== 'object' || left === null) return false;

    // 获得类型的原型
    let prototype = right.prototype
    // 获得对象的原型
    left = left.__proto__
    // 判断对象的类型是否等于类型的原型
    while (true) {
    	if (left === null)
    		return false
    	if (prototype === left)
    		return true
    	left = left.__proto__
    }
}
console.log('test', _instanceof(null, Array)) // false
```

  - 通过Object.prototype.toString.call 的返回值来判断,统一返回格式为 “[object Xxx]”
    ```Object.prototype.toString.call(xxxxxx).replace(/^\[object (\S+)\]$/, '$1')```


## This指向
```
function foo() {
  console.log(this.a)
}
var a = 1
foo()

const obj = {
  a: 2,
  foo: foo
}
obj.foo()

const c = new foo()
<!-- 对于直接调用 foo 来说，不管 foo 函数被放在了什么地方，this 一定是window
对于 obj.foo() 来说，我们只需要记住，谁调用了函数，谁就是 this，所以在这个场景下 foo 函数中的 this 就是 obj 对象
对于 new 的方式来说，this 被永远绑定在了 c 上面，不会被任何方式改变 this -->
function a() {
  return () => {
    return () => {
      console.log(this)
    }
  }
}
<!-- 箭头函数是没有 this 的，箭头函数中的 this 只取决包裹箭头函数的第一个普通函数的 this。在这个例子中，因为包裹箭头函数的第一个普通函数是 a，所以此时的 this 是 window。另外对箭头函数使用 bind这类函数是无效的。 -->
```

## new的过程

- 创建一个新对象
- 对象连接到构造函数原型上，并绑定 this（this 指向新对象）
- 执行构造函数代码（为这个新对象添加属性）
- 返回新对象（new 关键词执行之后总是会返回一个对象，要么是实例对象，要么是 return 语句指定的对象）
```
function create(fn, ...args) {
  if(typeof fn !== 'function') {
    throw 'fn must be a function';
  }
	// 1、用new Object() 的方式新建了一个对象obj
  // var obj = new Object()
	// 2、给该对象的__proto__赋值为fn.prototype，即设置原型链
  // obj.__proto__ = fn.prototype

  // 1、2步骤合并
  // 创建一个空对象，且这个空对象继承构造函数的 prototype 属性
  // 即实现 obj.__proto__ === constructor.prototype
  var obj = Object.create(fn.prototype);

	// 3、执行fn，并将obj作为内部this。使用 apply，改变构造函数 this 的指向到新建的对象，这样 obj 就可以访问到构造函数中的属性
  var res = fn.apply(obj, args);
	// 4、如果fn有返回值，则将其作为new操作返回内容，否则返回obj
	return res instanceof Object ? res : obj;
};

```

<!-- ## 实现call函数 -->



session，localstorage存储的kv对都是string，对于boolean的属性需要做一定的转换

js赋值语句的返回值就是值本身





