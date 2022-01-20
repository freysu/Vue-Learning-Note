# 预备

## 在 vuejs.org 下载 vue.js 和 vue.min.js

vue.js 开发版(用于编写)
vue.min.js 工程版(用于发布) //在开发环境下不要使用压缩版本，不然你就失去了所有常见错误相关的警告!

## 直接用 `<script>` 引入

直接下载并用 `<script>` 标签引入，Vue 会被注册为一个全局变量。

## CDN

对于制作原型或学习，你可以这样使用最新版本：

```
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
```

对于生产环境，我们推荐链接到一个明确的版本号和构建文件，以避免新版本造成的不可预期的破坏：

```
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>
```

如果你使用原生 ES Modules，这里也有一个兼容 ES Module 的构建文件：

```
<script type="module">
  import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js'
</script>
```

你可以在 cdn.jsdelivr.net/npm/vue 浏览 NPM 包的源代码。

Vue 也可以在 unpkg 和 cdnjs 上获取 (cdnjs 的版本更新可能略滞后)。

请确认了解不同构建版本并在你发布的站点中使用生产环境版本，把 vue.js 换成 vue.min.js。这是一个更小的构建，可以带来比开发环境下更快的速度体验。

## 安装本地调试服务（可选）

```
cpnm install -g live-server
```

## npm 项目初始化

```
npm init
```

## 使用 Vue 的两种方式

1. 直接引入 vue.js 文件。
   类似`<script>`的引用。
2. 基于 Node 环境创建 Vue 项目(使用 vue/cli 创建初始化一个 vue 项目)
   开发的时候通常使用这种方式。

# 第一节课

## 入门知识点

1. 绑定文本 `{{}}`
2. 绑定属性：`v-bind`
3. 绑定事件（事件修饰符）`v-on`

## 总结

1. 熟悉 vue 的开发思路和基础语法
2. 掌握 vue/cli 工具的基础技能（安装 Node、使用 npm）

# 第二节课

## 使用 vue/cli 工具创建一个 vue 项目（需要 Node 环境）

全局安装 vue/cli 工具：

```
npm install -g @vue/cli
```

使用 vue/cli 常见 vue 项目：

```
vue create hello
```

启动服务器：
（而非直接打开静态文件的方式）

```
npm run serve
```

## 组件化开发概述

以 vue 为后缀的文件是 vue 的单文件组件。
组件可以理解成一个可以自定义的有更强大功能的标签。
这样用组件拆分的方式开发项目，思路清晰，简洁高效，而且还可以复用相同的组件。

## 课后练习

按照本章的内容，完成下列操作：

1. 下载 vue/cli
2. `vue create project_name`
3. 通过`npm run serve`命令启动项目
4. 将默认项目改写成一个计数器功能。


## 组件嵌套

1. 组件命名：大写字母开头(可以避免与 HTML 标签冲突)，驼峰命名
2. 注册组件
3. 组件传值

## 课后练习

1. 在单文件组件中实现一个图片切换效果，图片与数字列表都要使用列表展示。
2. 用组件化的开发方式制作晓舟报告移动端的首页，组件名称如下所示：
   - Search ------ 搜索框
   - Swiper ------ 轮播图
   - Container------ 主体内容
   - Menu ------ 底栏菜单
