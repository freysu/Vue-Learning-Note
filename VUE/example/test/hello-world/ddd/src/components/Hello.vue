<template>
	<div>
	<h1>{{message}}>{{msg}}</h1>
		
	</div>
</template>

<script>
	export default {
		name: "hello",
		// 可以接收到父级组件传递的数据
		// props: ["msg"],
		props: {
			// msg: String,
			msg:{
				type:String,
				default:""
			}
		},
		data() {
			return {
				message: "hhhhello.vue",
			}
		},
	}
</script>

<style>
</style>
