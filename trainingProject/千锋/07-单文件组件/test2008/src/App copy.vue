<!-- eslint-disable vue/no-deprecated-filter -->
<!--
 * @Author: freysu
 * @Date: 2022-11-20 17:53:29
 * @LastEditors: freysu
 * @LastEditTime: 2022-12-13 19:50:52
 * @Description: file content
-->
<template>
  <div>
    hello app - {{ myName }}
  </div>
  <div>
    <!-- public文件夹才能在写代码中访问 -->
    <!-- src="相对路径的外部的js/css/img" -->
    <img src="/img/test.jpg" alt="">
  </div>
  <input id="" v-model="myText" type="text">
  <button @click="handleAdd">add</button>
  <ul>
    <li v-for="data in dataList" :key="data">{{ data }}</li>
  </ul>
  <!-- 当event事件被触发时，会执行handleEvent函数进行isShow取反 -->
  <Navbar myname="home" :myright="false" @event="handleEvent">
    <div>2222</div>
  </Navbar>
  <Sidebar v-show="isShow" />
  <div v-hello>11111</div>
  <div v-hello>22222</div>
  <ul>
    <li>1111111111</li>
    <li>1111111111</li>
    <li>1111111111</li>
    <li>1111111111</li>
    <li>1111111111</li>
  </ul>
  <!-- Vue3 Filters are deprecated -->
  <img :src="imgUrl | imgFilter" alt="">
  </div>
</template>

<script>
// ES6 导出规范 babel ES6 ==> ES5
// @ alias别名===> src的绝对路径 webpack配置的别名
// import Sidebar from '@/components/Sidebar'
// import Navbar from '@/components/Navbar'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

// 1.导入 2.全局或者局部注册组件
import Vue from 'vue'
// 组件名，组件实例
// Vue.component('NavBar', Navbar)
Vue.directive('hello', {
  inserted(el, binding) {
    console.log(el)
    el.style.border = '1px solid black'
  }
})
Vue.filter('imgFilter', (path) => {
  return path.replace('/thumbnail/', '/thumbnail/128x128')
})
export default {
  components: {
    Sidebar,
    'Navbar': Navbar
  },
  data() {
    return {
      myName: 'freysu',
      myText: '',
      dataList: [],
      isShow: true,
      imgUrl: 'https://p0.pipi.cn/mmdb/25bfd692030923f0eeb860743216097043104.jpg?imageMogr2/thumbnail/'
    }
  },
  computed: {},
  watch: {},
  methods: {
    handleAdd() {
      console.log(this.myText, 'add')
      this.dataList.push(this.myText)
    },
    handleEvent() {
      this.isShow = !this.isShow
    }
  }
}
</script>
<!-- lang 支持scss语言 scoped属性 css局部生效 -->
<style lang="scss" scoped >
/* css 写法 */
/*
ul li{
    background-color: yellow;
    width:300px;
}
*/
$width: 300px;
ul {
  li {
    background-color: red;
    width: $width;
  }
}
</style>
