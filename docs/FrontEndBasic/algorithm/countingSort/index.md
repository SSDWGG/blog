# 计数排序


```
function countingSort(arr, flag = 0){
let min = arr[0], max = arr[0], len = arr.length;
// 求最大最小值
for(let i = 0; i < len; i++){
max = Math.max(arr[i], max);
min = Math.min(arr[i], min);
}
// 计算差值
let s = max - min;
console.log(s)
// 创建数组用于统计元素个数
let count = new Array(s).fill(0);
for(let i = 0; i < len; i++){
let index = arr[i] - min;// 创建下标
count[index] += 1;
}
console.log(count)
// 遍历统计数组，按照统计数组中每个元素的个数和顺序将原数组元素加入结果数组
let res = [];
for(let i = 0; i < s + 1; i++){
if(count[i] === 0) continue;
res.push(arr[arr.indexOf(i + min)]);
--count[i];
}
return flag ? res.reverse() : res;
}
​
// let arr = [2, 9, 6, 7, 4, 3, 1, 7, 0, -1, -2]
// console.log(countingSort(arr))

```