## 围绕React衍生出来的思考
### 1、声名式开发
### 2、可以与其他框架并存
### 3、组件化
### 4、单项数据流
单项数据流，父组件可以向子组件传递数据，但是子组件不能够修改传过来的数据，只能够通过父组件注册的方法才能够在父组件那里修改
### 5、视图层框架
### 6、函数式编程
更容易实现前端自动化测试

## protypes 和deufauprop

## 什么是虚拟DOM
#### 1.state 数据
#### 2.JSX模板
#### 3.数据+模板结合，生成真实的dom显示
#### 4.state发生改变
#### 5.数据+模板结合，生成真是的dom，替换原始的dom

缺陷：
第一次生成了一个完成的dom片段
第二次生成了一个完整的dom片段
第二次的dom替换第一次的dom，耗性能

#### 1.state 数据
#### 2.JSX模板
#### 3.数据+模板结合，生成真实的dom显示
#### 4.state发生改变
#### 5.数据+模板结合，生成真实的dom，并不直接替换原始的dom
#### 6.新的dom（documentFragment）和原始的dom做比对，找差异
#### 7.找出input框发生了变化
#### 8.只用新的dom中的input元素，替换掉老的dom中的input元素

缺陷：
性能的提升并不明显


#### 1.state 数据
#### 2.JSX模板  JSX=》JS对象（createElement创建元素）=》真实的dom  Vue也是虚拟dom

#### 3.数据+模板结合生成虚拟dom（虚拟dom就是一个JS对象，用它来面熟真是dom）
['div',{id:'abc'},['span',{},'hello world']], abc是属性

#### 4.用虚拟dom，生成真实的dom显示，来显示
<div><span>hello world</span></div>

#### 5.state发生变化
#### 6.数据+模板生成新的虚拟dom （极大提升了性能）
['div',{id:'abc'},['span',{},'bye，bye']]
#### 7. 比较原始虚拟dom和新的虚拟dom的区别，找到区别 (提升了性能)
#### 8.直接操作dom，改变span中的内容

优点 1.性能提升
2.它使得跨端应用得以实现。RN

## diff算法 diffrence 找差异
setState 异步的，提升性能
同级比较，只比对一层，下面就不会再比较了，比对算法简单，比对速度快



## 生命周期函数指在某一个时刻组件会自动调用执行的函数
#### componentWillMount 在组件即将被挂载到页面的时刻自动执行
#### componentDidMount 组件挂载后执行

#### shouldComponentUpdate
组件被更新之前它会自动被执行 需要返回一个布尔值 true 更新 false 组件不更新

#### componentWillUpdate 组件被更新之前它会自动执行，但是他在shouldComponentUpdate之后执行，如果shouldComponentUpdate返回true他才会执行，如果返回false就不会执行














