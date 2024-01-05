# 希尔排序


```
function shellSort(arr){
let len = arr.length, gap, temp;
// 缩小增量gap
for(gap = len >> 1; gap >= 1; gap>>=1){
 for(let i = gap; i < len; i++){
   let preIndex = i - gap;// 插入排序是从后往前的，preIndex代表当前元素的上一个元素
   if(arr[i] < arr[preIndex]){
     temp = arr[i];
     while(preIndex >= 0 && arr[preIndex] > temp){
       arr[preIndex + gap] = arr[preIndex];
       preIndex -= gap;
     }
     arr[preIndex + gap] = temp;
   }
 }
}
return arr;
}
// shellSort([8, 9, 1, 7, 2, 3, 5, 4, 6, 0]);
```