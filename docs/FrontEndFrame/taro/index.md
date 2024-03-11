# taro框架


## Taro

参考文档：https://juejin.cn/post/6989968343163731981#heading-14


### 微信小程序生命周期

应⽤的⽣命周期执行过程：

⽤户⾸次打开⼩程序，触发 onLaunch（全局只触发⼀次）
⼩程序初始化完成后，触发onShow⽅法，监听⼩程序显示
⼩程序从前台进⼊后台，触发 onHide⽅法
⼩程序从后台进⼊前台显示，触发 onShow⽅法
⼩程序后台运⾏⼀定时间，或系统资源占⽤过⾼，会被销毁

⻚⾯⽣命周期的执行过程：

⼩程序注册完成后，加载⻚⾯，触发onLoad⽅法
⻚⾯载⼊后触发onShow⽅法，显示⻚⾯
⾸次显示⻚⾯，会触发onReady⽅法，渲染⻚⾯元素和样式，⼀个⻚⾯只会调⽤⼀次
当⼩程序后台运⾏或跳转到其他⻚⾯时，触发onHide⽅法
当⼩程序有后台进⼊到前台运⾏或重新进⼊⻚⾯时，触发onShow⽅法
当使⽤重定向⽅法 wx.redirectTo() 或关闭当前⻚返回上⼀⻚wx.navigateBack()，触发onUnload

当存在也应用生命周期和页面周期的时候，相关的执行顺序如下：

打开小程序：(App)onLaunch --> (App)onShow --> (Pages)onLoad --> (Pages)onShow --> (pages)onRead
进入下一个页面：(Pages)onHide --> (Next)onLoad --> (Next)onShow --> (Next)onReady
返回上一个页面：(curr)onUnload --> (pre)onShow
离开小程序：(App)onHide
再次进入：小程序未销毁 --> (App)onShow(执行上面的顺序），小程序被销毁，（App)onLaunch重新开始执行.
