# 手写数组方法

对于es6这些数组方法，如果内部存储的是值类型的数据，方法是不会改变原数组的，如果是引用类型的数据是会改变原数组的。

### 实现forEach方法
```
Array.prototype.myForEach = function(callback, context=window) {
  // this=>arr
  let self = this,  
      i = 0,
      len = self.length;

  for(;i<len;i++) {
    typeof callback == 'function' && callback.call(context,self[i], i)
   }
}
```
### 实现filter方法
```
Array.prototype.myFilter = function(callback, context=window) {
  // this=>arr
  let arr = this,  
      i = 0,
      newArr = []
      len = arr.length;

  for(;i<len;i++) {
    if(callback.call(context,arr[i], i,arr)) newArr.push(arr[i])
   }
   return newArr
}
```
### 实现find方法
```
  Array.prototype.myFind = function(callback, context=window) {
  // this=>arr
  let arr = this,  
      i = 0,
      len = arr.length;

  for(;i<len;i++) {
    if(callback.call(context,arr[i],i)) return arr[i]
   }
}
      const arr = [10, 9, 8, 7, 6, 5, 5, 3, 2, 1];
      console.log(arr.myFind((item) => item === 99));
```
### 实现findIndex方法 （类比同上）
### 实现map方法
```
Array.prototype.myMap = function (callback, context) {
        // 转换拷贝类数组 , arguments是一个类数组对象
        var arr = Array.prototype.slice.call(this), //由于是ES5所以就不用...展开符了
          mappedArr = [],
          i = 0;
        for (; i < arr.length; i++) {
          mappedArr.push(callback.call(context, arr[i], i, this));
        }
        return mappedArr;
      };
```

### 实现every方法
```
Array.prototype.myEvery = function (callback, context = window) {
        let len = this.length, 
         flag = true,
          i = 0;
        for (; i < len; i++) {
          if(!callback.apply(context,[this[i],i,this])) {
            flag = false
            break
          }
        }
        return flag;
      };
```

### 实现some方法(写法同上)

### 实现flat函数方法
```
Array.prototype.myFlat = function (num = 1) {
        if (!Number(num) || Number(num) < 0) {
          return this;
        }
        let arr = this.concat(); // 获得调用 myFlat 函数的数组
        while (num > 0) {
          if (arr.some((x) => Array.isArray(x))) {
            // 数组中还有数组元素的话并且 num > 0，继续展开一层数组
            arr = [].concat.apply([], arr); //concat可以拼接数组元素，apply会自动展开一层arr数组
          } else {
            break; // 数组中没有数组元素并且不管 num 是否依旧大于 0，停止循环。
          }
          num--;
        }
        return arr;
      };
```

### 实现reduce方法
```
Array.prototype.myReduce = function(fn, initialValue) {
  var arr = Array.prototype.slice.call(this);
  var res, startIndex;

  res = initialValue ? initialValue : arr[0]; // 不传默认取数组第一项
  startIndex = initialValue ? 0 : 1;

  for(var i = startIndex; i < arr.length; i++) {
    // 把初始值、当前值、索引、当前数组返回去。调用的时候传到函数参数中 [1,2,3,4].reduce((initVal,curr,index,arr))
    res = fn.call(null, res, arr[i], i, this); 
  }
  return res;
}

<!-- 使用reduce手写compose函数 -->
function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
```
### 实现isArray方法
```
Array.myIsArray = function(o) {
  // 调用顶级对象上的toString方法转成[object Array]形式
  return Object.prototype.toString.call(o) === '[object Array]';
};
```
### 实现Array.of方法
Array.of将一组值转换为数组
```
Array() // []
Array(3) // [, , ,]
Array(3, 11, 8) // [3, 11, 8]
<!-- 可以看到Array方法对不同长度的参数会进行不同的操作 -->
Array.of() // []
Array.of(undefined) // [undefined]
Array.of(1) // [1]
Array.of(1, 2) // [1, 2]
<!-- Array.of方法统一的将参数转换为数组 -->
<!-- 实现起来也是很简洁 -->
function ArrayOf(){
  return [].slice.call(arguments);
}
```

### Array.from方法
- 可以转换一个带有length属性的类数组或者对象成为一个数组
- 可以将字符串转为数组
- 第二个参数可以对每一个元素进行处理操作类似map

