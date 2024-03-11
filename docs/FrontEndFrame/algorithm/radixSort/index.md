# 基数排序

```
function radixSort(arr) {
let maxLen = 0;
// 算出最大值的位数
for(let val of arr){
 let len = String(val).length;
 if(len > maxLen){
   maxLen = len;
 }
}
// 遍历各个位数并进行排序
for(let i = 1; i <= maxLen; i++){
 arr = sort(arr, i, maxLen);
}
return arr;
}
// 对位数的排序
function sort(arr, index, maxLen){
let buckets = [];
for(let i = 0; i < 10; i++){
// 创建十个桶
 buckets.push([]);
}
for(let val of arr){
 // str.padStart(targetLength,string)：
 // 使用指定字符串填充到目标字符串前面，使其达到目标长度；
 // 位数不够则进行补0
 let str = String(val).padStart(maxLen, '0');
 // 将对应数值的存入对应的桶
 let num = str[maxLen - index];
 buckets[num].push(val);
}
let result = [];
for(let bucket of buckets){
 result.push(...bucket);
}
return result;
}

```