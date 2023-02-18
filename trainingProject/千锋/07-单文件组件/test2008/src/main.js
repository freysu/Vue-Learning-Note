/*
 * @Author: freysu
 * @Date: 2022-11-20 17:53:29
 * @LastEditors: freysu
 * @LastEditTime: 2022-12-13 22:58:48
 * @Description: file content
 */
import Vue from 'vue' // ES6的标准导入方式
import App from './App.vue' // 导入根组件App
import router from './router'
// import store from './store'

Vue.config.productionTip = false

new Vue({
  router, // this.$router ===> router
  // store,
  render: (h) => h(App) // 把App根组件渲染成实例挂载到App节点
}).$mount('#app')
