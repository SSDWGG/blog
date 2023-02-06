# 数组篇
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