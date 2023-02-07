# js篇
### 类型检测
  关于类型检测，首先我们知道JS有7种基本数据类型：Undefined、Null、Boolean、Number、String、Symbol、BigInt
  和引用数据类型: 对象Object（包含Object、Array、RegExp、Date、Math、Function）

  - typeof 可以用于检测基本数据类型（不包含null）

  - instanceof 可以正确的判断对象的类型（原型链查找）

  - 通过Object.prototype.toString.call 的返回值来判断,统一返回格式为 “[object Xxx]”
    ```Object.prototype.toString.call(xxxxxx).replace(/^\[object (\S+)\]$/, '$1')```

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





