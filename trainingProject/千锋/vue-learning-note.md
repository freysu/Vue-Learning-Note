[toc]

## 引入 Vue

```html
<div id="box">{{10+20}} {{myName}}</div>
<div>{{10+20}}</div>
<script>
  var vm = new Vue({
    el: '#box',
    // 页面直接引入vue的data写法
    data: {
      myName: 'freysu1' //状态 vm.myName = "ddd" 就可以直接修改 myName
    }
    // vue-cli版本
    // data() {
    // 	return {
    // 		myName: "freysu"
    // 	}
    // }
  })
</script>
```

## 初始 Vue 的响应式原理

当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的 property，并使用 Object.defineProperty 把这些 property 全部转为 getter/setter。
Object.defineProperty 是 ES5 中一个无法 shim 的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因。

> 面试回答：
> 每次数据更改的时候通过 setter 拦截，通知 watcher 触发更新，watcher 是观察者，它收集了很多状态相关的依赖以及发布者订阅者，触发这些订阅者进行调用吗，这样组件就会得到更新。虚拟 DOM，diff 算法往后会学到。

### Vue3 的变化

Object.defineProperty 有以下缺点。

1.  无法监听 ES6 的 Set、Map 变化；
2.  无法监听 Class 类型的数据
3.  属性的新加或者删除也无法监听
4.  数组元素的增加和删除也无法监听

针对 Object.defineProperty 的缺点，ES6 Proxy 都能够完美地解决。它唯一的缺点就是对 IE 不友好，所以 Vue3 在检测到如果是使用 IE 的情况下（没错，IE11 都不支持 Proxy），会自动降级为 Object.defineProperty 的数据监听系统。

```js
var obj = {}
Object.defineProperty(obj, 'myName', {
  // ES6 写法
  get() {
    console.log('get') // 当访问变量时就会触发这个函数，obj.myName
  },
  set(value) {
    console.log('set: ', value) // 当修改变量的值时将会触发这个函数，obj.myName = "xxx"
  }
  // ES5
  // get: function () {},
  // set: function () {}
})
```

## 组件

Vue 组件 = Vue 实例 = new Vue(options);
组件的三大核心概念——属性、事件、插槽

### Vue.component 缺点

1. 全局定义：强制要求每个 component 中的命名不能重复
1. 字符串模板：缺乏语法高亮，在 HTML 有多行的时候，需要用到丑陋的`\`
1. 不支持 CSS：意味着当 HTML 和 JavaScript 组件化时，CSS 明显被遗漏
1. 没有构建步骤：限制只能使用 HTML 和 ES5 JavaScript，而不能使用预处理器，如 Pug(formerly Jade) 和 Babel

#### 组件的组成 - 属性

```mermaid
graph LR;
    组件 --> 属性 --> A["自定义属性 props"] --> B["组件 props 中声明的属性"];
    属性 --> C["原生属性 attrs"] --> D["没有声明的属性，默认自动挂载到组件根元素上，设置 inheritAttrs 为 false 可以关闭自动挂载"];
    属性 --> E["特殊属性 class、style"] --> F["挂载到组件根元素上，支持字符串、对象、数组等多种语法"]
```

##### 自定义属性 props

1. 不推荐使用数组形式，不利于后期维护，尽可能用对象形式

   ```js
   //bad
   props:['a','b','c']
   // good
   props:{'a':{ },'b':{ },'c':{ }}
   ```

> 以上内容编写于 2022 年 6 月 10 日 04 点 04 分
