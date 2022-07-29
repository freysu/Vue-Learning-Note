// import ES2015模块语法， 可以引入第三方模块。 node: require  module.exports
// export ES2015模块语法，暴露接口
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false // 配置开发选项，给用户友好的错误提示，发布的时候可以改成true 

new Vue({
	// render: h => h(App), // 把App渲染到挂载到app的容器里面。
	// render(h) {
	// 	return h(App);
	// }
	render(createElement) {
		return createElement(App);
	}
}).$mount('#app') // 把vue的实例挂载到app的容器上
