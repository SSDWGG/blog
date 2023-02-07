# 数组、对象 去重

### 双重循环对比
```
function distinct(arr) {
    for (let i=0, len=arr.length; i<len; i++) {
        for (let j=i+1; j<len; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
                // splice 会改变数组长度，所以要将数组长度 len 和下标 j 减一
                len--;
                j--;
            }
        }
    }
    return arr;
}
```

### set去重
```
function distinct(array) {
   return Array.from(new Set(array));
}
```

### Array.filter() 加 indexOf/includes
```
const distinct = (arr) => arr.filter((item, index)=> arr.indexOf(item) === index)
```
### 使用reduce去重对象数组
```
const dedup = (data, getKey = () => { }) => {
    const dateMap = data.reduce((pre, cur) => {
        const key = getKey(cur)
        if (!pre[key]) {
            pre[key] = cur
        }
        return pre
    }, {})
    return Object.values(dateMap)
}
let data = [
    { id: 1, v: 1 },
    { id: 2, v: 2 },
    { id: 1, v: 1 },
];
console.log(dedup(data, (item) => item.id))
 ```