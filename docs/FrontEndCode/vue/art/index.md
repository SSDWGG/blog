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


## 文章特点

* 超级详细 - 逐行级别的分析

所谓逐行并非一行接着一行，逐行指的是讲解的详细程度，这套文章将致力于覆盖所有核心代码，毕竟每一句代码都有他存在的意思，假如我们不讲明白任何一句代码的意义，那又怎么敢说是源码分析呢？

* 实时更新 - 与 `Vue` 源码 `dev` 分支保持同步

这套文章的特点之一就是**永远不会过时**，因为我们会跟随 `Vue` 源码 `dev` 分支的脚步更新文章的内容，这对于读者的好处是学习的总是最新的。（注：有的时候 `dev` 分支的更新到文章的更新会有稍许延迟）。

这里要解释一下，有的时候我们在讲解一个文件的代码时，你会发现，有些内容我们并没有进行讲解，那是因为这部分内容可能与本节的主题无关，但这些内容绝对不会被遗漏，它们会被放到合适的地方进行讲解

* 深度分析 - 讲解issue

我们知道 `Vue` 这个项目自诞生以来一直都在不断的更新完善，比如添加新的特性，修复已知bug等等。而在这个过程中源码也将越来越完善，这也意味着代码曾经并不完善，本套文章在分析源码时除了告诉你这段代码为什么这么写之外，还会根据相关 `issue` 分析这段代码之前是怎么写的以及存在的问题。

## 为什么要阅读源码？

如果你要问我这个问题，我会反问你：为什么要读书(技术书)？不知道你对这句话怎么看：**源码难道不是更精华的书吗？**

## 你应该了解的

文章将会尽可能详细，且尽可能对基础的知识点进行讲解，但需要太多口舌的东西即使再基础也不会去讲，这里列出我希望你在阅读该系列文章前最好了解的东西：

* ES6+
* node & npm & package.json
* Rollup（这东西要比webpack容易上手的多）
	* [英文文档](https://rollupjs.org/guide/en)
	* [中文文档](https://rollupjs.org/guide/zh)
* flow（类型检查）
	* [flow](https://flow.org/en/)

由于 Vue 的源码采用 ES6，所以你至少应该掌握 ES6 才能看得懂，其次你最好对 `package.json` 中的字段的作用有所了解。由于 Vue 使用 `Rollup` 构建，所以你不了解 `Rollup` 的话，你就看不懂 Vue 的构建配置，最后 Vue 采用 `flow` 做类型系统，最起码就应该知道 `flow` 的简单语法，否则会影响你看源码。

## 推荐阅读这套文章的方式

既然是阅读源码，没有源码怎么读？所以你要使用你喜欢的方式拿到源码才行，最简单的方式是，clone 一份源码到你的本地。如果你不想这么做，你可以安装一个 `chrome` 的扩展程序，使得你能够以在线资源管理器的方式阅读GitHub仓库的代码，我常用的 `chrome` 扩展是：[octotree](https://github.com/buunguyen/octotree)，类似的扩展还有很多，你喜欢就好。

## 一点补充

有的同学可能会有疑问，比如：*你又不是作者本人，你怎么知道人家的代码为什么那么写*、*Vue.js又不是你写的，谁知道你分析的对不对* 等等。

对于第一个问题我想说的是，你们的怀疑是对的，毕竟最有权威分析 `Vue` 源码的人必然是作者本身，但同学们要知道**作者(小右)才没有时间来给大家写一套源码分析的文章**。对于第二个问题，`Vue` 确实不是我写的，但为了证明这套文章还是稍微有点质量的，在这里我把看源码过程中提过的一些 `PR` 贴在下面，也证明我确实对 `Vue` 有些粗浅的理解。

* [https://github.com/vuejs/vue/pull/7981](https://github.com/vuejs/vue/pull/7981)
* [https://github.com/vuejs/vue/pull/6795](https://github.com/vuejs/vue/pull/6795)
* [https://github.com/vuejs/vue/pull/7875](https://github.com/vuejs/vue/pull/7875)
* [https://github.com/vuejs/vue/pull/6833](https://github.com/vuejs/vue/pull/6833)
* [https://github.com/vuejs/vue/pull/7308](https://github.com/vuejs/vue/pull/7308)
* [https://github.com/vuejs/vue/pull/7762](https://github.com/vuejs/vue/pull/7762)
* [https://github.com/vuejs/vue/pull/7510](https://github.com/vuejs/vue/pull/7510)
* [https://github.com/vuejs/vue/pull/8734](https://github.com/vuejs/vue/pull/8734)

说实话，上面的 `PR` 都是些微不足道的，因为写文章需要大量的时间，随着这些文章的完成，我很希望抽出时间做一些实质性的贡献。