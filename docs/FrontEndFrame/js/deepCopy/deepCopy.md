## 深浅拷贝

针对引用对象的拷贝，拷贝时创建新的引用对象不影响原引用对象为深拷贝

### 二、一层数组或对象的深拷贝

数组：slice(),concat(),filter(),map()

```
let newArr = arr.slice()
let newArr = arr.concat()
let newArr = arr.filter((item) => {
  return true
})
let newArr = arr.map((item) => {
  return true
})
```

解构赋值（）,

对象：Object.assign()
```
var newObj = Object.assign({}, obj)
```
### 一、多层嵌套的深拷贝

- JSON.parse/JSON.stringify方式（对象中存在undefined、任意的函数以及 symbol 作为对象属性值时 存在隐患）
```
var copyObj = JSON.parse( JSON.stringify(obj) )
```

- 深拷贝函数遍历拷贝
```
// 递归深拷贝函数
      deepClone(Obj: any) {
        let newObj: any;
        if (Obj instanceof Array) {
          newObj = []; // 创建一个空的数组
          var i = Obj.length;
          while (i--) {
            newObj[i] = state.deepClone(Obj[i]);
          }
          return newObj;
        } else if (Obj instanceof Object) {
          newObj = {}; // 创建一个空对象
          for (var k in Obj) {
            // 为这个对象添加新的属性
            newObj[k] = state.deepClone(Obj[k]);
          }
          return newObj;
        } else {
          return Obj;
        }
      }



/**
* 深拷贝
* @param {Object} obj 拷贝对象
*/
export const deepCopy = (obj:any) => {
  let result = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        result[key] = deepCopy(obj[key]) 
      } else {
        result[key] = obj[key]
      }
    }
  }
  return result
 }
```
