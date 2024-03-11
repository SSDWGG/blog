## 字符串常用方法整理
- Length
返回字符串的长度（字符数）
var str = "Hello World!";
console.log(str.length); //12 包括空格1个

- chartAt()
返回指定位置的字符，第一个字符位置为0
var str ="hello world!";
str.charAt(4); // o
- charCodeAt()
返回字符串第一个字符的Unicode编码
var str ="hello world!";
str.charCodeAt(4) //111
- concat()
用于连接两个或多个字符串。该方法没有改变原有字符串，但是会返回连接两个或多个字符串新字符串。
var str1 = 'hello';
var str2 = ' word ';
var str3 = '123';
var str = str1.concat(str2,str3); //hello world 123
- formCharCode()
可接受一个指定的Unicode值，然后返回一个字符串。
var n = String.fromCharCode(72,69,76,76,79); //HELLO
String.fromCharCode(68) //D
- indexOf()
返回某个指定的字符串值在字符串中首次出现的位置。如果没有找到匹配的字符串则返回-1
//在字符串第五个位置开始查找字符“e” 第一次出现的位置：
语法：
stringObject.indexOf(searchvalue,fromindex)
searchvalue	必需。规定需检索的字符串值。
fromindex	可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的首字符开始检索
 
例子：
var str = "Hello world ,welcome to the universe.";
var n = str.indexOf("e",5); //14
- lastIndexOf()
语法：
stringObject.lastIndexOf(searchvalue,fromindex)
searchvalue	必需。规定需检索的字符串值。
fromindex	可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的最后一个字符处开始检索。
可返回一个指定的字符串值最后出现的位置，如果指定第二个参数start,则在一个字符串中的指定位置从后向前搜索。
var str = "Hello world, welcome to the universe.";
var n = str.lastIndexOf("w",5);  // -1
var n = str.lastIndexOf("o",5);  // 4
- match()
在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
string.match(regexp)
//regexp 必需。规定要匹配的模式的RegExp对象。
//如果该参数不是RegExp对象，则需要首先把它传递给RegExp构造函数，
//结果为数组，如果没有找到匹配结果返回null。
//全局查找字符串 “alin”,且不区分大小写：
var str = "The raiinn in SPAIN stays mainly  in the plain";
var n = str.match(/ain/gi);
- replace()
用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。该方法不会改变原始字符串。
//执行一次替换
var str = "Visit Microsoft! Visit Microsoft!";
var n = str.replace("Microsoft" ,"Roon"); //Visit Roon!Visit Microsoft!
//执行一个全局替换，忽略大小写：
var str = "Mr Blue has a blue house and a blue car";
var n = str.replace(/blue/gi,"red"); // Mr red has a red house and a red car
- search()
用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。如果没有找到任何匹配的子字符串,则返回-1
string.search(searchvalue);
//searchvalue 必须。查找的字符串或者正则表达式。
//返回相匹配的String 对象起始位置，未找到返回-1，有多个就返回第一个找到的位置
var str = 'hello world!';
str.search('world'); //6
- slice(start,end)
可提取字符串的某个部分，并以新的字符串返回被提取的部分。使用start(包含)和end(不包含)参数来指定字符串提取的部分。
end若未指定，则要提取的子串包括start 到原字符串结尾的字符串，字符串中第一个字符位置为0，第二个字符位置为1，以此类推。
var str = "Hello world!";
var n = str.slice(1,5); //ello
var s = str.slice(1); //ello world!
- split()
用于把一个字符串分割成字符串数组。
提示：如果把空字符串("")用作separator(分割器),那么stringObject 中的每个字符之间都会被分割。注意：split()方法不改变原始字符串。
￼
- substr()
从起始索引号提取字符串中指定数目的字符。
提示：substr() 的参数指定的是子串的开始位置和长度，因此它可以替代substring()和slice()来使用。
注意：substr()方法不会改变源字符串。
￼
- substring()l
用于提取字符串中介于两个指定下标之间的字符。返回的子串包括开始处的字符，但不包括结束处的字符。
 
-  toLowerCase()方法用于把字符串转换为小写
￼
- toUpperCase()方法用于把字符串转换为大写。
￼
- trim() 去除字符串两边的空白
￼
- valueOf() 方法可返回Sting对象的原始值
￼
