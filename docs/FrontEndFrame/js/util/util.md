## 常用util函数

### 深拷贝函数
```
// 递归深拷贝函数
      deepClone(Obj: any) {
        let newObj: any;
        if (Obj instanceof Array) {
          newObj = []; // 创建一个空的数组
          var i = Obj.length;
          while (i--) {
            newObj[i] = state.deepClone(Obj[i]);
          }
          return newObj;
        } else if (Obj instanceof Object) {
          newObj = {}; // 创建一个空对象
          for (var k in Obj) {
            // 为这个对象添加新的属性
            newObj[k] = state.deepClone(Obj[k]);
          }
          return newObj;
        } else {
          return Obj;
        }
      }

/**
* 深拷贝
* @param {Object} obj 拷贝对象
*/
export const deepCopy = (obj:any) => {
  let result = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        result[key] = deepCopy(obj[key]) 
      } else {
        result[key] = obj[key]
      }
    }
  }
  return result
 }
```

## 在 url 尾部添加参数
```
export const appendQueryParams = (
  url = '',
  params: Record<string, string | number> = {}
): string => {
  const queryParamsString = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
  if (!queryParamsString) return url;
  if (url.includes('?')) {
    if (url.endsWith('&') || url.endsWith('?')) return url + queryParamsString;
    return `${url}&${queryParamsString}`;
  }
  return `${url}?${queryParamsString}`;
};
```

## 指定字符长度，超出展示...或者超长截取
export const changeLongStr = (str: string, len = 15,ellipsis = true) =>
{
  if(!str)return ''; 
  const arrStr =  Array.from(str);
 return  arrStr.length>len?`${arrStr.slice(0,len).join('')}${ellipsis?'...':''}`:str;
};


## 驼峰转换函数
```
function convertToCamelCase(str) {
  // 去除中划线分隔符获取单词数组
  var strArr = str.split('-');
  // 如果第一个为空，则去掉
  if(strArr[0] === '') {
    strArr.shift();
  } 
  // 遍历第二个单词到最后一个单词，并转换单词首字母为大写
  for(var i = 1, len = strArr.length; i < len; i++){
    // 如果不为空，则转成大写
    if(strArr[i] !== '') {
       strArr[i] = strArr[i][0].toUpperCase() + strArr[i].substring(1);
    }   
  }
  return strArr.join('');
}
```
