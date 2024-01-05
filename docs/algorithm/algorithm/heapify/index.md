# 堆排序


```
/*
* 维护堆的性质
* @param arr 存储堆的数组
* @param n 数组长度
* @param i 待维护节点的下标
*/
function heapify(arr,n,i){
let largest = i;
let lson = i * 2 + 1;
let rson = i * 2 + 2;
// 找出父结点、左孩子、右孩子中最大的下标
if(lson < n && arr[largest] < arr[lson]){
 largest = lson;
}
if(rson < n && arr[largest] < arr[rson]){
 largest = rson;
}
if(largest !== i){ 
 // 将最大的值赋值给父节点
 [arr[largest],arr[i]] = [arr[i],arr[largest]];
 // 因为一个堆被改变了，会影响到子孩子的堆，所以需要进行递归
 heapify(arr, n, largest);
}
}
​
// 堆排序入口
function heap_sort(arr, n){
let i;
// 建堆 [(n/2)-1] ---> [((n-1)-1)/2]，从后往前建堆
for(i = (n / 2) - 1; i >= 0; i--){
 heapify(arr, n, i);
}

// 排序 大顶堆堆顶元素与最后一个元素交换
for(i = n - 1; i >= 0; i--){
 [arr[i], arr[0]] = [arr[0], arr[i]];
 heapify(arr, i, 0);// 维护堆顶的元素
}
return arr;
}
// let arr = [2,3,8,1,4,9,10,7,16,14];
// let n = 10;
// heap_sort(arr, n);

```