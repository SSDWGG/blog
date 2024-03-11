# 冒泡排序


```
function bubbleSort(array){
 for(let i = 0; i < array.length; i++){
 let flag = true;
 for(let j = 0; j < array.length - 1 - i; j++){
   if(array[j] > array[j + 1]){
     [array[j],array[j + 1]] = [array[j + 1],arr[j]];
     flag = false;
   }
 }
 if(flag){// 没有冒泡，则停止循环
   break;
 }
}
return array;
}

```