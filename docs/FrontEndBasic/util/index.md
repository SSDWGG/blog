# 工具类函数

## 下载
```
const downloadNewWindow = (url) => {
    const a = document.createElement('a')
    a.setAttribute('download', '')
    a.setAttribute('target', '_blank')
    a.setAttribute('href', url)
    a.click()
}
```

## 类型鉴别

## url参数获取函数
```
const parseQueryString = (hrefStr) =>{
        const splitStr = hrefStr.split("&")
        const urlObj = {}
        for(let i = 0; i < splitStr.length; i++){
            urlObj[splitStr[i].split("=")[0]] = splitStr[i].split("=")[1]
        }
        return urlObj
    }
```

## 复制
```
const copyToClipboard = (value: string): void => {
  const transfer = document.createElement("textarea");
  document.body.appendChild(transfer);
  transfer.value = value;
  transfer.focus();
  transfer.select();
  if (document.execCommand("copy")) {
    document.execCommand("copy");
  }
  transfer.blur();
  document.body.removeChild(transfer);
};
```


## 获取uuid
```export const getUuid = (): string => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};```