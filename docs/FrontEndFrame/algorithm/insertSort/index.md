# 插入排序


```
function insertSort(array){
for(let i = 0; i < array.length; i++){
 let preIndex = i - 1, cur = array[i];
 while(preIndex >= 0 && array[preIndex] > cur){
   array[preIndex + 1] = array[preIndex];
   preIndex--;
 }
 array[preIndex + 1] = cur;
}
return array;
}

```