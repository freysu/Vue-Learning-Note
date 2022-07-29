<template>
	<!-- 网页模板，编写html -->
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<!-- <h1 v-bind:title="message">{{message}}</h1>
		<button type="button" v-on:click="showHi()">showHi</button>
		<p v-if="isLogin">Welcome, XiaoMing</p>
		<p v-if="!isLogin">Not Welcome</p>
		<p v-show="false">head</p>
		<p v-show="true">head1</p>
		<ul>
			<li v-for="(value,index) of fruits" v-bind:key="index">{{index}}:{{value}}</li>
		</ul>
		<table border="" cellspacing="" cellpadding="">
			<thead>
				<th>序号</th>
				<th>姓名</th>
				<th>年龄</th>
			</thead>
			<tbody>
				<tr v-for="(v,i) of students" :key="i">
					<th>{{i + 1}}</th>
					<td>{{v.name}}</td>
					<td>{{v.age}}</td>
				</tr>
			</tbody>
		</table> -->
		<!-- 通过v-bind绑定msg属性就可以识别到app.vue的message  -->
		<Hello v-bind:msg="message"></Hello>
		<!-- 这样子是不能通过app.vue的message绑定的 -->
		<Child @myevent="changeData" msg="message"></Child>
		<h1>{{childData}}</h1>
	</div>
</template>

<script>
	// 父级向子级传递数据：使用属性传递
	import Child from "./components/Child.vue"
	import Hello from "./components/Hello.vue"
	import HelloWorld from './components/HelloWorld.vue'
	// 暴露一个默认的对象
	export default {
		name: 'App',
		// 注册组件
		components: {
			HelloWorld,
			Hello,
			Child
		},
		data() {
			return {
				message: "hello vue",
				isLogin: false,
				fruits: ["banana", "apple", "pear"],
				students: [{
					name: "小明",
					age: 1
				}, {
					name: "小红",
					age: 2
				}, {
					name: "小亮",
					age: 3
				}, ],
				childData: 0
			}
		},
		methods: {
			showHi() {
				alert("hi")
			},
			changeData(childData) {
				console.log(childData);
				this.childData = childData;
			}
		}
	}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
