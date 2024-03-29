## 常用正则

### 千位分隔符
```
function parseToMoney(num) {
  num = parseFloat(num.toFixed(3));
  let [integer, decimal] = String.prototype.split.call(num, '.');
  integer = integer.replace(/\d(?=(\d{3})+$)/g, '$&,');
  return integer + '.' + (decimal ? decimal : '');
}
```

### 手机号码
```
function isPhone(tel) {
    var regx = /^1[34578]\d{9}$/;
    return regx.test(tel);
}
```
### 验证是否是邮箱
```
function isEmail(email) {
    var regx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/;
    return regx.test(email);
}
```
### 验证是否是身份证
```
function isCardNo(number) {
    var regx = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return regx.test(number);
}
```
### 正则写一个根据name获取cookie中的值的方法
```
function getCookie(name) {
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)'));
  if (match) return unescape(match[2]);
}
```
### 电话号码
```
const isPhone = (s: string): boolean => {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s);
};
```

### URl地址
```export const isURL = (s: string): boolean => {
  return /^http[s]?:\/\/.*/.test(s);
};```