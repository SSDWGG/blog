# 归并排序


```
// 分割数组时直接将数组分割为两个数组，合并时直接合并数组
function mergeSort(array){
if(array.length < 2){
 return array;
}
const mid = Math.floor(array.length / 2);
const left = array.slice(0, mid);
const right = array.slice(mid);
return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
const result = [];
while(left.length && right.length){
 if(left[0] < right[0]){
   result.push(left.shift());
 } else {
   result.push(right.shift());
 }
}

while(left.length){
 result.push(left.shift());
}
while(right.length){
 result.push(right.shift());
}
return result;
}

```