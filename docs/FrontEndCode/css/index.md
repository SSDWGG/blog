# css

## 垂直居中和水平居中的多种实现
-   flex 布局加属性 justify-content，align-items

-   绝对定位加 translate（减去父元素减子元素的长度的一半）
  ```
  position: absolute; left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  ```
- 绝对定位加 margin
父元素设置 position 为 absolute。子元素设置 top 为 50%， left 为 50%
margin-top 和 margin-left 为宽高一半的负值。

- flex 布局加子元素设置属性 margin
父元素设置属性 display: flex;，子元素设置属性 margin: auto;

- 单行文本水平垂直居中 (line-hight +  text-align)

- grid 布局加属性 justify-content: center 和 align-items:center

- 父元素 display: table，子元素 display: table-cell
- 父元素 display: table-cell，子元素 display: inline-block

## 一个实用的属性
 'pointer-events': "none”    //元素虚化,可以实现点击失效

## 实现一个三角形
```
#triangle{
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid red;
}
```

## 去除图片的底部自带边距
给图片本身加上vertical-align:bottom;
图片的 父容器加fontsize 0

## grid 布局
待产出...

## 几种经典布局的实现
待产出...

## css选择器优先级
内联样式	1,0,0,0
id选择器	0,1,0,0
类和伪类选择器	0,0,1,0
元素选择器	0,0,0,1
通配选择器	0,0,0,0

## flex布局
常用的flex: 1是三个属性的缩写
flex-grow: 1 ：该属性默认为 0 ，如果存在剩余空间，元素也不放大。设置为 1  代表会放大。
flex-shrink: 1 ：该属性默认为 `1 ，如果空间不足，元素缩小。
flex-basis: 0% ：该属性定义在分配多余空间之前，元素占据的主轴空间。浏览器就是根据这个属性来计算是否有多余空间的。默认值为 auto ，即项目本身大小。设置为 0%  之后，因为有 flex-grow  和 flex-shrink 的设置会自动放大或缩小。在做两栏布局时，如果右边的自适应元素 flex-basis  设为auto  的话，其本身大小将会是 0




- [css-flex教程阮一峰](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

- [一些不错的css动效](https://goatchen.coding.net/public/html-css/HTML-CSS/git/files)
