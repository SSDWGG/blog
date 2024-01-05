# 快速排序


```
/*
* 法一：开辟left和right两个空间来存储
* 每次递归返回left、target、right拼接后的数组
*/
function quickSort(array){
if(array.length < 2) return array;
const target = array[0];
const left = [], right = [];
for(let i = 1; i < array.length; i++){
 if(array[i] < target) {
   left.push(array[i]);
 }else{
   right.push(array[i]);
 }
}
return quickSort(left).concat([target],quickSort(right));
}
​
/*
* 法二：双下标法
* 声明l和r分别为首尾两个下标
* 在 l < r 条件下，找到 array[r] < target的值赋给array[l]
* 在 l < r 条件下，找到 array[r] >= target的值赋给array[r]
* 当 l = r 时，左侧的值全部小于 target，右侧的值全部大于target，将target放到此位置
* 相对于上一种方法，节省了空间
*/
function quickSort(arr,start,end){
if(end - start < 1) {
 return; 
}
const target = array[start];
let l = start, r = end;
while(l < r){
 while(l < r && array[r] >= target){
   r--;
 }
 array[l] = array[r];
 while(l < r && array[l] < target){
   l++;
 }
 array[r] = array[l];
}
array[l] = target;
quickSort(array, start, l - 1);
quickSort(array, l + 1, end);
return array;
}

```