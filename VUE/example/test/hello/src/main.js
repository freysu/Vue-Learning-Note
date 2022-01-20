// import ES2015模块语法，可以引入第三方模块。 //node语法 require
// export ES2015模块语法，暴露接口，可以被其他模块调用 //node语法 module.exports
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false //配置开发环境，友好的错误提示，发布时可以设成true

new Vue({
  render: h => h(App),
  // // 渲染 在html加载app组件
  // render(createElement) {
  //   return createElement(App);
  // }
}).$mount('#app')