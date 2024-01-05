#  目录大纲

- 一、组件的本质
	1. 组件的产出是什么
	2. 组件的 VNode 如何表示
	3. 组件的种类
- 二、先设计 VNode 吧
	1. 用 VNode 描述真实 DOM
	2. 用 VNode 描述抽象内容
	3. VNode 的种类
	4. 使用 flags 作为 VNode 的标识
	5. 枚举值 VNodeFlags
	6. chidlren 和 ChildrenFlags
	7. VNodeData
- 三、辅助创建 VNode 的 h 函数
	1. 在 VNode 创建时确定其类型 - flags
	2. 在 VNode 创建时确定其chidlren的类型
	3. 使用 h 函数创建 VNode
- 四、渲染器之挂载
	1. 责任重大的渲染器
	2. 挂载普通标签元素
		- 2.1、基本原理
		- 2.2、class的处理
		- 2.3、Attributes 和 DOM Properties
		- 2.4、事件的处理
	3. 挂载纯文本、Fragment 和 Portal
		- 3.1、挂载文本节点
		- 3.2、挂载 Fragment
		- 3.3、挂载 Portal
	4. 有状态组件的挂载和原理
	5. 函数式组件的挂载和原理
- 五、渲染器之patch
	1. 基本原则
	2. 替换 VNode
	3. 更新标签元素
		- 3.1、更新标签元素的基本原则
		- 3.2、更新 VNodeData
		- 3.3、更新子节点
	4. 更新文本节点
	5. 更新 Fragment
	6. 更新 Portal
	7. 有状态组件的更新
		- 7.1、主动更新
		- 7.2、初步了解组件的外部状态 props
		- 7.3、被动更新
		- 7.4、我们需要 shouldUpdateComponent
	8. 函数式组件的更新
- 六、渲染器的核心 Diff 算法
	1. 核心 Diff 算法的发展史
	2. React 的核心 Diff 算法原理
	3. Vue2 的核心 Diff 算法原理
	4. Vue3 所采用的核心 Diff 算法及原理
		- 4.1、相同的前置和后置元素
		- 4.2、移动次数总是最少的
		- 4.3、最长递增子序列
- 七、自定义渲染器和异步渲染
	1. 自定义渲染器的原理
	2. 异步渲染的意义
	3. 异步渲染的关键点
	4. 调度器的实现
	5. 基于调度器的异步渲染
- 八、有状态组件的设计
	1. 组件自身状态
	2. 组件的外部状态
	3. 插槽的本质
	4. 组件的生命周期
	5. ref 的实现
	6. 一个组件涉及多个VNode对象
	7. 如何建立组件的父子关系
	8. 事件系统
	9. 兼容Vue2的对象式组件
- 九、基于 Proxy 的响应系统
	1. 基本原理
	2. 对象和数组的代理
	3. 集合的代理
	4. 计算属性
	5. Watch 的实现
	6. 组件实例的访问代理
- 十、组件的拓展
	1. 异步组件
	2. 指令的实现
	3. 实现 keepAlive
	4. memoize 的意义和实现
	5. Vue 中复用逻辑未必需要 hooks
	6. 错误处理