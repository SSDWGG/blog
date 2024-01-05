# react


##  常用hooks
### useEffect

effect（副作用）是react函数组件用来替代生命周期的函数。你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合

第一个参数接受一个callback回调函数，里面可以写执行业务代码

第二个参数可省略，它接受一个数组，可以是空数组，也包含了state数据

useEffect总是后于render函数 . state第一次初始化时，也会执行Effect内部的代码

LayoutEffect 先于render函数执行

### useState
const [state, setState] = useState(initValue) useState接收一个初始值，这个初始值可以是对象，也可以是简单数据类型。
setState异步更新
规则
只能React函数组件中使用Hooks。
useState不能在内部的循环、条件判断、嵌套的方法中使用。

### useContext

```
import React, { createContext, useContext, useState } from "react";
const initialState = { m: 100, n: 50 }; // 定义初始state
const X = createContext(); // 创建Context
let a = 0;
export default function App() {
  console.log(`render了${a}次`);//用来检查执行App函数多少次
  const [state, setState] = useState(initialState); // 创建state读写接口
  a += 1;
  return (
    <X.Provider value={{ state, setState }}> // 通过provider提供value给包围里内部组件，只有包围里的组件才有效
      <Father></Father>
    </X.Provider>
  );
}

const Father = (props) => {
  const { state, setState } = useContext(X);//拿到 名字为X的上下文的value，用两个变量来接收读写接口
  const addN = () => {
    setState((state) => {
      return { ...state, n: state.n + 1 };
    });
  };
  const addM = () => {
    setState((state) => {
      return { ...state, m: state.m + 1 };
    });
  };
  return (
    <div>
      爸爸组件
      <div>n:{state.n}</div>
      <Child />
      <button onClick={addN}>设置n</button>
      <button onClick={addM}>设置m</button>
    </div>
  );
};
const Child = (props) => {
  const { state } = useContext(X); // 读取state
  return (
    <div>
      儿子组件
      <div>m:{state.m}</div>
    </div>
  );
};

```


### 